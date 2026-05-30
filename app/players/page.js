import { GOLDEN_BOOT, TEAMS } from '../../lib/data';

export const metadata = { title: 'Top Scorers — WC 2026 Scorrito' };

const tierLabel = (odds) => {
  const n = parseInt(odds.replace('+',''));
  if (n <= 800)  return { label:'Top Favourite',  cls:'badge-yellow' };
  if (n <= 2000) return { label:'Strong Contender', cls:'badge-green' };
  if (n <= 4000) return { label:'Dark Horse',     cls:'badge-blue'   };
  return              { label:'Long Shot',        cls:'badge-gray'   };
};

export default function PlayersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">Golden Boot Odds</h1>
        <p className="text-slate-400 text-sm mt-1">
          Top goal scorer predictions for FIFA World Cup 2026 · Odds sourced from public markets (May 2026)
        </p>
      </div>

      {/* Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {GOLDEN_BOOT.slice(0, 3).map((p, i) => {
          const t = TEAMS[p.team];
          const medals = ['🥇','🥈','🥉'];
          return (
            <div key={p.player} className="card p-6 text-center" style={{ border: i===0 ? '1px solid #eab308' : undefined }}>
              <div className="text-4xl mb-2">{medals[i]}</div>
              <div className="text-2xl mb-1">{t?.flag}</div>
              <div className="text-lg font-bold text-slate-200">{p.player}</div>
              <div className="text-xs text-slate-500 mb-2">{p.club} · {t?.name}</div>
              <div className={`text-3xl font-bold mb-1 ${i===0?'text-yellow-400':'text-green-400'}`}>{p.odds}</div>
              <div className="text-xs text-slate-500">{p.impliedProb}% implied probability</div>
              <div className="mt-3 text-xs text-slate-400 leading-relaxed">{p.analysis}</div>
              <div className="mt-3 flex justify-center gap-3 text-xs text-slate-600">
                <span>WC goals: <span className="text-slate-400">{p.wcGoals}</span></span>
                <span>Int goals: <span className="text-slate-400">{p.intGoals}</span></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full list */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom:'1px solid #1a4027' }}>
              <th className="text-left p-3 text-slate-500 text-xs uppercase">#</th>
              <th className="text-left p-3 text-slate-500 text-xs uppercase">Player</th>
              <th className="text-left p-3 text-slate-500 text-xs uppercase hidden md:table-cell">Club</th>
              <th className="text-left p-3 text-slate-500 text-xs uppercase hidden lg:table-cell">Group</th>
              <th className="text-right p-3 text-slate-500 text-xs uppercase">Odds</th>
              <th className="text-right p-3 text-slate-500 text-xs uppercase">Prob</th>
              <th className="text-right p-3 text-slate-500 text-xs uppercase hidden md:table-cell">WC Goals</th>
              <th className="text-left p-3 text-slate-500 text-xs uppercase hidden xl:table-cell">Analysis</th>
            </tr>
          </thead>
          <tbody>
            {GOLDEN_BOOT.map((p, i) => {
              const t = TEAMS[p.team];
              const tier = tierLabel(p.odds);
              return (
                <tr key={p.player} style={{ borderBottom:'1px solid #1a4027' }} className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-500">{i+1}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{t?.flag}</span>
                      <div>
                        <div className="font-semibold text-slate-200">{p.player}</div>
                        <div className="text-xs text-slate-500">{t?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-slate-400 hidden md:table-cell">{p.club}</td>
                  <td className="p-3 hidden lg:table-cell">
                    <span className="badge badge-blue">Group {t?.group}</span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="font-mono text-yellow-400 font-semibold">{p.odds}</span>
                  </td>
                  <td className="p-3 text-right text-slate-400">{p.impliedProb}%</td>
                  <td className="p-3 text-right text-slate-400 hidden md:table-cell">{p.wcGoals}</td>
                  <td className="p-3 text-xs text-slate-500 hidden xl:table-cell max-w-xs">{p.analysis}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="card p-4 text-xs text-slate-500">
        <strong className="text-slate-300">About these odds:</strong> Decimal and American odds sourced from major betting markets (Betfair, Oddschecker aggregates, FanDuel, BetMGM) as of May 2026. Implied probability calculated as 1/(decimal odds). Odds change daily as squads, fitness, and form news emerges. Use as one input, not the sole basis for prediction.
      </div>
    </div>
  );
}
