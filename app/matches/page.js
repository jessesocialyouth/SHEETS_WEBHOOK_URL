'use client';
import { useState } from 'react';
import { FIXTURES, TEAMS, getMatchOdds } from '../../lib/data';

const GROUPS = ['All','A','B','C','D','E','F','G','H','I','J','K','L'];

function ProbBar({ winH, draw, winA }) {
  return (
    <div className="probability-bar my-1">
      <div style={{ width:`${winH*100}%`, background:'#22c55e' }} title={`Home ${(winH*100).toFixed(0)}%`} />
      <div style={{ width:`${draw*100}%`, background:'#64748b' }} title={`Draw ${(draw*100).toFixed(0)}%`} />
      <div style={{ width:`${winA*100}%`, background:'#ef4444' }} title={`Away ${(winA*100).toFixed(0)}%`} />
    </div>
  );
}

function MatchCard({ fixture: f }) {
  const h = TEAMS[f.home];
  const a = TEAMS[f.away];
  const odds = getMatchOdds(f.home, f.away);
  const d = new Date(f.date);
  const dateStr = d.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' });

  return (
    <div className="card p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="badge badge-blue">Group {f.group}</span>
          <span className="badge badge-gray">MD{f.matchday}</span>
        </div>
        <div className="text-right text-xs text-slate-500">
          <div>{dateStr}</div>
          <div>{f.city}</div>
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex-1 text-center">
          <div className="text-2xl mb-1">{h?.flag}</div>
          <div className="font-semibold text-slate-200 text-sm leading-tight">{h?.name}</div>
          <div className="text-xs text-slate-500">{h?.wc2022 || ''}</div>
        </div>

        <div className="text-center px-2">
          {f.result ? (
            <div className="text-xl font-bold text-green-400">{f.result.home} – {f.result.away}</div>
          ) : (
            <div className="text-sm text-slate-500">vs</div>
          )}
          <div className="text-xs font-mono text-green-500 mt-1">
            Tip: {odds?.likelyScore}
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="text-2xl mb-1">{a?.flag}</div>
          <div className="font-semibold text-slate-200 text-sm leading-tight">{a?.name}</div>
          <div className="text-xs text-slate-500">{a?.wc2022 || ''}</div>
        </div>
      </div>

      {/* Probability bar */}
      {odds && (
        <>
          <ProbBar winH={odds.winHome} draw={odds.draw} winA={odds.winAway} />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-green-400">{(odds.winHome*100).toFixed(0)}%</span>
            <span className="text-slate-500">{(odds.draw*100).toFixed(0)}%</span>
            <span className="text-red-400">{(odds.winAway*100).toFixed(0)}%</span>
          </div>
        </>
      )}

      {/* xG */}
      {odds && (
        <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between text-xs text-slate-500">
          <span>xG: <span className="text-green-400">{odds.xGHome}</span> – <span className="text-red-400">{odds.xGAway}</span></span>
          <span>Alt: <span className="text-yellow-400">{odds.altScore}</span></span>
        </div>
      )}

      {/* Analysis */}
      <div className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
        {odds?.scorritoTip}
      </div>

      {/* Key players */}
      <div className="mt-2 flex gap-2 flex-wrap">
        {(h?.keyPlayers || []).slice(0,2).map(p => (
          <span key={p} className="badge badge-green">{p}</span>
        ))}
        {(a?.keyPlayers || []).slice(0,2).map(p => (
          <span key={p} className="badge badge-red">{p}</span>
        ))}
      </div>
    </div>
  );
}

export default function MatchesPage() {
  const [activeGroup, setActiveGroup] = useState('All');
  const [activeDay, setActiveDay] = useState(0); // 0 = all

  const filtered = FIXTURES.filter(f => {
    const gOk = activeGroup === 'All' || f.group === activeGroup;
    const dOk = activeDay === 0 || f.matchday === activeDay;
    return gOk && dOk;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-green-400">Group Stage Matches</h1>
        <p className="text-slate-400 text-sm mt-1">72 matches · 11–27 June 2026 · Predicted scores via Poisson xG model</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex gap-1 flex-wrap">
          {GROUPS.map(g => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                activeGroup === g
                  ? 'bg-green-500 text-black'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {g === 'All' ? 'All Groups' : `Group ${g}`}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          {[0,1,2,3].map(d => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                activeDay === d
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {d === 0 ? 'All MD' : `MD${d}`}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-600">{filtered.length} matches shown</div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(f => <MatchCard key={f.id} fixture={f} />)}
      </div>
    </div>
  );
}
