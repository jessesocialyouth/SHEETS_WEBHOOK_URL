import { GROUPS, TEAMS, FIXTURES, TOURNAMENT_ODDS, getMatchOdds } from '../../lib/data';

const oddsByTeam = Object.fromEntries(TOURNAMENT_ODDS.map(o => [o.teamId, o]));

function QualProb(teamId) {
  // Rough qualification probability from tournament odds and strength
  const t = TEAMS[teamId];
  if (!t) return 50;
  return Math.min(95, Math.round(t.strength * 0.9 + t.impliedProb * 200));
}

export const metadata = { title: 'Groups — WC 2026 Scorrito' };

export default function GroupsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-green-400">Group Stage</h1>
        <p className="text-slate-400 text-sm mt-1">12 groups · 4 teams each · Top 2 + 8 best 3rd-place teams advance to R32</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Object.entries(GROUPS).map(([group, teamIds]) => {
          const groupFixtures = FIXTURES.filter(f => f.group === group);

          return (
            <div key={group} className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">Group {group}</h2>
                <span className="badge badge-green">6 matches</span>
              </div>

              {/* Teams table */}
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="text-slate-500 text-xs uppercase">
                    <th className="text-left pb-1">Team</th>
                    <th className="text-right pb-1">Odds</th>
                    <th className="text-right pb-1">Qual %</th>
                  </tr>
                </thead>
                <tbody>
                  {teamIds.map((id, i) => {
                    const t = TEAMS[id];
                    const o = oddsByTeam[id];
                    const qual = QualProb(id);
                    return (
                      <tr key={id} className="border-t border-slate-800">
                        <td className="py-1.5 flex items-center gap-1.5">
                          <span className="text-base">{t?.flag}</span>
                          <span className={i === 0 ? 'text-green-300 font-semibold' : 'text-slate-300'}>{t?.name}</span>
                          {i === 0 && <span className="badge badge-yellow ml-1">Fav</span>}
                        </td>
                        <td className="text-right text-xs font-mono text-green-400">
                          {o?.odds ?? '—'}
                        </td>
                        <td className="text-right">
                          <span className={`text-xs font-semibold ${qual >= 70 ? 'text-green-400' : qual >= 45 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {qual}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Fixtures */}
              <div className="space-y-1">
                {groupFixtures.map(f => {
                  const h = TEAMS[f.home];
                  const a = TEAMS[f.away];
                  const odds = getMatchOdds(f.home, f.away);
                  const d = new Date(f.date);
                  const label = d.toLocaleDateString('en-GB', { day:'numeric', month:'short' });
                  return (
                    <div key={f.id} className="flex items-center gap-1 text-xs text-slate-400 py-0.5">
                      <span className="w-14 shrink-0 text-slate-600">MD{f.matchday} · {label}</span>
                      <span>{h?.flag} {h?.name}</span>
                      <span className="font-mono text-green-500 mx-1">{odds?.likelyScore}</span>
                      <span>{a?.name} {a?.flag}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
