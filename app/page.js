'use client';
import { useState, useEffect } from 'react';
import { FIXTURES, TEAMS, GROUPS, GOLDEN_BOOT, TOURNAMENT_ODDS, getMatchOdds } from '../lib/data';

const STORAGE_KEY = 'scorrito_wc2026_v2';
const GROUP_KEYS  = Object.keys(GROUPS);

function load() {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

function fmt(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export default function Scorrito() {
  const [preds,     setPreds]     = useState({});
  const [winner,    setWinner]    = useState('');
  const [scorer,    setScorer]    = useState('');
  const [group,     setGroup]     = useState('A');
  const [exported,  setExported]  = useState(false);

  useEffect(() => { setPreds(load()); }, []);

  const set = (id, side, raw) => {
    const v = raw === '' ? undefined : Math.max(0, Math.min(20, parseInt(raw) || 0));
    setPreds(prev => {
      const next = { ...prev, [id]: { ...prev[id], [side]: v } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const applyTip = (f) => {
    const odds = getMatchOdds(f.home, f.away);
    if (!odds) return;
    const [h, a] = odds.likelyScore.split('-').map(Number);
    set(f.id, 'home', h);
    set(f.id, 'away', a);
    // set both at once to avoid two renders
    setPreds(prev => {
      const next = { ...prev, [f.id]: { home: h, away: a } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const applyAllTips = () => {
    const next = { ...preds };
    FIXTURES.forEach(f => {
      const odds = getMatchOdds(f.home, f.away);
      if (!odds) return;
      const [h, a] = odds.likelyScore.split('-').map(Number);
      next[f.id] = { home: h, away: a };
    });
    setPreds(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const exportTxt = () => {
    const lines = ['FIFA World Cup 2026 — Scorrito', ''];
    GROUP_KEYS.forEach(g => {
      lines.push(`── Group ${g} ──`);
      FIXTURES.filter(f => f.group === g).forEach(f => {
        const h = TEAMS[f.home];
        const a = TEAMS[f.away];
        const p = preds[f.id] || {};
        lines.push(`  ${fmt(f.date)}  ${h?.name} ${p.home ?? '?'} - ${p.away ?? '?'}  ${a?.name}`);
      });
      lines.push('');
    });
    if (winner) lines.push(`Winner: ${TEAMS[winner]?.name}`);
    if (scorer) lines.push(`Top scorer: ${scorer}`);
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    Object.assign(document.createElement('a'), { href: url, download: 'scorrito_wc2026.txt' }).click();
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  const clearAll = () => {
    if (!confirm('Clear all predictions?')) return;
    setPreds({});
    setWinner('');
    setScorer('');
    localStorage.removeItem(STORAGE_KEY);
  };

  const fixtures = FIXTURES.filter(f => f.group === group);
  const filled   = Object.values(preds).filter(p => p.home !== undefined && p.away !== undefined).length;
  const total    = FIXTURES.length;
  const pct      = Math.round(filled / total * 100);

  const groupFilled = (g) =>
    FIXTURES.filter(f => f.group === g && preds[f.id]?.home !== undefined && preds[f.id]?.away !== undefined).length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">🏆 Scorrito WC 2026</h1>
          <p className="text-xs text-slate-500 mt-0.5">Fill in your exact score predictions · {filled}/{total} done</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={applyAllTips}
            className="text-xs px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors"
            title="Fill all matches with model tips"
          >
            Auto-fill
          </button>
          <button
            onClick={exportTxt}
            className="text-xs px-3 py-1.5 bg-green-800 hover:bg-green-700 rounded-lg text-white transition-colors"
          >
            {exported ? '✓ Saved' : 'Export'}
          </button>
          <button onClick={clearAll} className="text-xs px-3 py-1.5 bg-red-950 hover:bg-red-900 rounded-lg text-red-400 transition-colors">
            Clear
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div style={{ width: `${pct}%` }} className="h-full bg-green-500 transition-all duration-300 rounded-full" />
      </div>

      {/* Group tabs */}
      <div className="flex gap-1 flex-wrap">
        {GROUP_KEYS.map(g => {
          const gf = groupFilled(g);
          const done = gf === 6;
          return (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                group === g
                  ? 'bg-green-600 text-white'
                  : done
                    ? 'bg-slate-700 text-green-400'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {g}
              {done && <span className="ml-1 text-xs">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Matches for selected group */}
      <div className="space-y-2">
        {fixtures.map(f => {
          const h    = TEAMS[f.home];
          const a    = TEAMS[f.away];
          const odds = getMatchOdds(f.home, f.away);
          const p    = preds[f.id] || {};
          const done = p.home !== undefined && p.away !== undefined;

          // Favourite indicator
          const favHome = odds && odds.winHome > odds.winAway + 0.05;
          const favAway = odds && odds.winAway > odds.winHome + 0.05;

          return (
            <div
              key={f.id}
              className={`rounded-xl p-3 border transition-colors ${
                done ? 'border-green-900 bg-slate-900' : 'border-slate-800 bg-slate-900'
              }`}
            >
              {/* Top row: date + tip button */}
              <div className="flex items-center justify-between mb-2 text-xs text-slate-500">
                <span>MD{f.matchday} · {fmt(f.date)} · {f.city}</span>
                <button
                  onClick={() => applyTip(f)}
                  className="text-green-600 hover:text-green-400 font-mono transition-colors"
                  title="Apply model tip"
                >
                  tip: {odds?.likelyScore} ✦
                </button>
              </div>

              {/* Teams + score inputs */}
              <div className="grid items-center gap-2" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
                {/* Home */}
                <div className={`flex items-center gap-2 ${favHome ? 'font-semibold' : ''}`}>
                  <span className="text-2xl leading-none">{h?.flag}</span>
                  <span className={`text-sm leading-tight ${favHome ? 'text-white' : 'text-slate-300'}`}>{h?.name}</span>
                  {favHome && <span className="text-green-500 text-xs">▲</span>}
                </div>

                {/* Inputs — centred, large tap targets */}
                <div className="flex items-center gap-2 justify-center">
                  <input
                    type="number" inputMode="numeric" min="0" max="20"
                    value={p.home ?? ''}
                    onChange={e => set(f.id, 'home', e.target.value)}
                    className={`score-input ${p.home !== undefined ? 'filled' : ''}`}
                    placeholder="–"
                  />
                  <span className="text-slate-500 font-bold">:</span>
                  <input
                    type="number" inputMode="numeric" min="0" max="20"
                    value={p.away ?? ''}
                    onChange={e => set(f.id, 'away', e.target.value)}
                    className={`score-input ${p.away !== undefined ? 'filled' : ''}`}
                    placeholder="–"
                  />
                </div>

                {/* Away */}
                <div className={`flex items-center gap-2 justify-end ${favAway ? 'font-semibold' : ''}`}>
                  {favAway && <span className="text-red-500 text-xs">▲</span>}
                  <span className={`text-sm leading-tight text-right ${favAway ? 'text-white' : 'text-slate-300'}`}>{a?.name}</span>
                  <span className="text-2xl leading-none">{a?.flag}</span>
                </div>
              </div>

              {/* Probability bar */}
              {odds && (
                <div className="mt-2 flex h-1 rounded-full overflow-hidden gap-px">
                  <div style={{ width: `${odds.winHome * 100}%` }} className="bg-green-600" />
                  <div style={{ width: `${odds.draw * 100}%` }}    className="bg-slate-600" />
                  <div style={{ width: `${odds.winAway * 100}%` }} className="bg-red-700" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bonus picks */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
        <p className="text-xs text-slate-500 uppercase tracking-widest">Bonus picks</p>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Tournament winner</label>
          <select
            value={winner}
            onChange={e => setWinner(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-green-500 focus:outline-none"
          >
            <option value="">Pick a team…</option>
            {TOURNAMENT_ODDS.map(o => {
              const t = TEAMS[o.teamId];
              return <option key={o.teamId} value={o.teamId}>{t?.flag} {t?.name} ({o.odds})</option>;
            })}
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Top scorer (Golden Boot)</label>
          <select
            value={scorer}
            onChange={e => setScorer(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-yellow-500 focus:outline-none"
          >
            <option value="">Pick a player…</option>
            {GOLDEN_BOOT.map(p => {
              const t = TEAMS[p.team];
              return <option key={p.player} value={p.player}>{t?.flag} {p.player} ({p.odds})</option>;
            })}
          </select>
        </div>
      </div>

    </div>
  );
}
