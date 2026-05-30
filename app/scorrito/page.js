'use client';
import { useState, useEffect } from 'react';
import { FIXTURES, TEAMS, GROUPS, GOLDEN_BOOT, TOURNAMENT_ODDS, getMatchOdds, calcScoritoPoints } from '../../lib/data';

const STORAGE_KEY = 'scorrito_wc2026';

function load() {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

function save(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function ProbBar({ winH, draw, winA }) {
  return (
    <div className="probability-bar">
      <div style={{ width:`${winH*100}%`, background:'#22c55e' }} />
      <div style={{ width:`${draw*100}%`, background:'#475569' }} />
      <div style={{ width:`${winA*100}%`, background:'#ef4444' }} />
    </div>
  );
}

function MatchRow({ fixture: f, prediction, onChange }) {
  const h = TEAMS[f.home];
  const a = TEAMS[f.away];
  const odds = getMatchOdds(f.home, f.away);
  const d = new Date(f.date);
  const dateStr = d.toLocaleDateString('en-GB', { day:'2-digit', month:'short' });
  const hasPred = prediction?.home !== undefined && prediction?.away !== undefined;

  const pts = f.result && hasPred
    ? calcScoritoPoints(prediction, f.result)
    : null;

  const favHome = odds && odds.winHome > odds.winAway && odds.winHome > odds.draw;
  const favAway = odds && odds.winAway > odds.winHome && odds.winAway > odds.draw;
  const favDraw  = odds && odds.draw >= odds.winHome && odds.draw >= odds.winAway;

  return (
    <div className={`card p-3 transition-all ${hasPred ? 'border-green-900' : ''}`}>
      <div className="flex items-center gap-2 flex-wrap">

        {/* Date + group */}
        <div className="w-24 shrink-0">
          <div className="text-xs text-slate-500">{dateStr}</div>
          <div className="flex gap-1">
            <span className="badge badge-blue">G{f.group}</span>
            <span className="badge badge-gray">MD{f.matchday}</span>
          </div>
        </div>

        {/* Home team */}
        <div className="flex items-center gap-1.5 w-28 shrink-0">
          <span className="text-lg">{h?.flag}</span>
          <span className={`text-sm font-semibold leading-tight ${favHome ? 'text-green-300' : 'text-slate-300'}`}>
            {h?.name}
          </span>
        </div>

        {/* Score input */}
        <div className="flex items-center gap-2 mx-1">
          <input
            type="number" min="0" max="20"
            value={prediction?.home ?? ''}
            onChange={e => onChange(f.id, 'home', e.target.value)}
            className={`score-input ${prediction?.home !== undefined ? 'has-value' : ''}`}
            placeholder="0"
          />
          <span className="text-slate-500 text-lg">–</span>
          <input
            type="number" min="0" max="20"
            value={prediction?.away ?? ''}
            onChange={e => onChange(f.id, 'away', e.target.value)}
            className={`score-input ${prediction?.away !== undefined ? 'has-value' : ''}`}
            placeholder="0"
          />
        </div>

        {/* Away team */}
        <div className="flex items-center gap-1.5 w-28 shrink-0">
          <span className={`text-sm font-semibold leading-tight ${favAway ? 'text-red-300' : 'text-slate-300'}`}>
            {a?.name}
          </span>
          <span className="text-lg">{a?.flag}</span>
        </div>

        {/* Prob bar + tip */}
        <div className="flex-1 min-w-32">
          {odds && <ProbBar winH={odds.winHome} draw={odds.draw} winA={odds.winAway} />}
          <div className="flex justify-between text-xs mt-0.5">
            <span className={favHome ? 'text-green-400 font-semibold' : 'text-slate-600'}>{(odds?.winHome*100).toFixed(0)}%</span>
            <span className={favDraw ? 'text-slate-300 font-semibold' : 'text-slate-600'}>{(odds?.draw*100).toFixed(0)}%</span>
            <span className={favAway ? 'text-red-400 font-semibold' : 'text-slate-600'}>{(odds?.winAway*100).toFixed(0)}%</span>
          </div>
        </div>

        {/* AI tip */}
        <button
          title="Apply suggested score"
          onClick={() => {
            const [sh, sa] = (odds?.likelyScore || '1-0').split('-');
            onChange(f.id, 'home', sh);
            onChange(f.id, 'away', sa);
          }}
          className="text-xs text-green-600 hover:text-green-400 px-2 py-1 rounded border border-green-900 hover:border-green-700 transition-colors shrink-0"
          title={`Apply tip: ${odds?.likelyScore}`}
        >
          {odds?.likelyScore} ✦
        </button>

        {/* Points display (after results) */}
        {pts !== null && (
          <span className={`badge ${pts===3?'badge-yellow':pts===1?'badge-green':'badge-red'} shrink-0`}>
            {pts}pts
          </span>
        )}
      </div>

      {/* Expanded analysis (small) */}
      <div className="mt-1.5 text-xs text-slate-600 leading-relaxed">
        {odds?.scorritoTip}
        {h?.keyPlayers?.[0] && <> · <span className="text-green-700">{h.keyPlayers[0]}</span></>}
        {a?.keyPlayers?.[0] && <> vs <span className="text-red-700">{a.keyPlayers[0]}</span></>}
      </div>
    </div>
  );
}

export default function ScorittoPage() {
  const [preds, setPreds]           = useState({});
  const [winner, setWinner]         = useState('');
  const [topScorer, setTopScorer]   = useState('');
  const [filterGroup, setFilterGroup] = useState('All');
  const [autoFill, setAutoFill]     = useState(false);
  const [saved, setSaved]           = useState(false);

  useEffect(() => { setPreds(load()); }, []);

  const handleChange = (id, side, val) => {
    const v = val === '' ? undefined : Math.max(0, Math.min(20, parseInt(val) || 0));
    setPreds(prev => {
      const updated = { ...prev, [id]: { ...prev[id], [side]: v } };
      save(updated);
      return updated;
    });
    setSaved(false);
  };

  const handleAutoFill = () => {
    const newPreds = {};
    FIXTURES.forEach(f => {
      const odds = getMatchOdds(f.home, f.away);
      if (odds) {
        const [sh, sa] = odds.likelyScore.split('-');
        newPreds[f.id] = { home: parseInt(sh), away: parseInt(sa) };
      }
    });
    setPreds(newPreds);
    save(newPreds);
    setAutoFill(true);
    setTimeout(() => setAutoFill(false), 2000);
  };

  const handleSave = () => {
    save(preds);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleExport = () => {
    const rows = FIXTURES.map(f => {
      const h = TEAMS[f.home];
      const a = TEAMS[f.away];
      const p = preds[f.id] || {};
      return `${f.date} | Group ${f.group} MD${f.matchday} | ${h?.name} ${p.home??'?'}-${p.away??'?'} ${a?.name}`;
    });
    rows.push('');
    rows.push(`Tournament winner: ${winner || '?'}`);
    rows.push(`Top scorer: ${topScorer || '?'}`);
    const blob = new Blob([rows.join('\n')], { type:'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'scorrito_wc2026.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (!confirm('Clear all predictions?')) return;
    setPreds({});
    setWinner('');
    setTopScorer('');
    save({});
  };

  const filled  = Object.keys(preds).filter(k => preds[k]?.home !== undefined && preds[k]?.away !== undefined).length;
  const total   = FIXTURES.length;
  const pct     = Math.round(filled / total * 100);

  const filtered = filterGroup === 'All' ? FIXTURES : FIXTURES.filter(f => f.group === filterGroup);
  const groupKeys = ['All', ...Object.keys(GROUPS)];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="card p-5" style={{ background:'linear-gradient(135deg,#0a2e14,#0f2d1a)' }}>
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-green-400">⚽ Scorrito Helper</h1>
            <p className="text-slate-400 text-sm mt-1">
              Fill in your exact score predictions for all 72 group stage matches.
              The model tip (✦) is generated by a Poisson xG model from team strength ratings.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={handleAutoFill} className="text-xs px-3 py-1.5 rounded bg-blue-800 hover:bg-blue-700 text-white transition-colors">
              {autoFill ? '✓ Filled!' : '✨ Auto-fill tips'}
            </button>
            <button onClick={handleSave} className="text-xs px-3 py-1.5 rounded bg-green-800 hover:bg-green-700 text-white transition-colors">
              {saved ? '✓ Saved!' : '💾 Save'}
            </button>
            <button onClick={handleExport} className="text-xs px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white transition-colors">
              📥 Export
            </button>
            <button onClick={handleClear} className="text-xs px-3 py-1.5 rounded bg-red-900 hover:bg-red-800 text-white transition-colors">
              🗑 Clear
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{filled} / {total} matches filled</span>
            <span className="text-green-400 font-semibold">{pct}%</span>
          </div>
          <div className="progress-bar">
            <div style={{ width:`${pct}%`, background:'#22c55e', height:'100%', transition:'width 0.3s' }} />
          </div>
        </div>
      </div>

      {/* Tournament bonus picks */}
      <div className="card p-5">
        <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-widest mb-4">Bonus Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1">Tournament Winner</label>
            <select
              value={winner}
              onChange={e => setWinner(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-slate-200 focus:border-green-500 focus:outline-none"
            >
              <option value="">— Select team —</option>
              {TOURNAMENT_ODDS.map(o => {
                const t = TEAMS[o.teamId];
                return (
                  <option key={o.teamId} value={o.teamId}>
                    {t?.flag} {t?.name} ({o.odds})
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Top Scorer (Golden Boot)</label>
            <select
              value={topScorer}
              onChange={e => setTopScorer(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-slate-200 focus:border-yellow-500 focus:outline-none"
            >
              <option value="">— Select player —</option>
              {GOLDEN_BOOT.map(p => {
                const t = TEAMS[p.team];
                return (
                  <option key={p.player} value={p.player}>
                    {t?.flag} {p.player} ({p.odds})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {(winner || topScorer) && (
          <div className="mt-3 flex gap-3 text-sm">
            {winner && <span className="badge badge-green">{TEAMS[winner]?.flag} {TEAMS[winner]?.name}</span>}
            {topScorer && <span className="badge badge-yellow">⚽ {topScorer}</span>}
          </div>
        )}
      </div>

      {/* Group filter */}
      <div className="flex gap-2 flex-wrap">
        {groupKeys.map(g => (
          <button
            key={g}
            onClick={() => setFilterGroup(g)}
            className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
              filterGroup === g
                ? 'bg-green-500 text-black'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {g === 'All' ? 'All Groups' : `Group ${g}`}
            {g !== 'All' && (() => {
              const gFilled = FIXTURES
                .filter(f => f.group === g)
                .filter(f => preds[f.id]?.home !== undefined && preds[f.id]?.away !== undefined)
                .length;
              return gFilled === 6 ? ' ✓' : ` ${gFilled}/6`;
            })()}
          </button>
        ))}
      </div>

      {/* Match rows */}
      <div className="space-y-2">
        {filtered.map(f => (
          <MatchRow
            key={f.id}
            fixture={f}
            prediction={preds[f.id]}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="card p-4 text-xs text-slate-500">
        <strong className="text-slate-300">How Scorrito works:</strong> Exact score = 3pts · Correct result (W/D/L) = 1pt · Wrong = 0pts.
        The ✦ tip uses a Poisson xG model: expected goals per team derived from strength ratings (ELO-based, sourced from tournament odds),
        then the most probable exact scoreline is computed. It is not a guarantee — upsets happen! Use analysis as one signal alongside team news and your own intuition.
      </div>
    </div>
  );
}
