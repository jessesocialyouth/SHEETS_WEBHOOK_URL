import { FIXTURES, TEAMS, GROUPS, GOLDEN_BOOT, TOURNAMENT_ODDS, getMatchOdds } from '../../../lib/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'all';

  const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };

  if (type === 'fixtures') {
    const enriched = FIXTURES.map(f => ({
      ...f,
      homeTeam: TEAMS[f.home],
      awayTeam: TEAMS[f.away],
      odds: getMatchOdds(f.home, f.away),
    }));
    return Response.json({ fixtures: enriched }, { headers });
  }

  if (type === 'groups') {
    const data = Object.entries(GROUPS).map(([g, ids]) => ({
      group: g,
      teams: ids.map(id => ({ ...TEAMS[id], tournamentOdds: TOURNAMENT_ODDS.find(o => o.teamId === id) })),
      fixtures: FIXTURES.filter(f => f.group === g).map(f => ({
        ...f, odds: getMatchOdds(f.home, f.away),
      })),
    }));
    return Response.json({ groups: data }, { headers });
  }

  if (type === 'players') {
    const players = GOLDEN_BOOT.map(p => ({
      ...p,
      team: TEAMS[p.team],
    }));
    return Response.json({ players }, { headers });
  }

  if (type === 'match') {
    const matchId = searchParams.get('id');
    const fixture = FIXTURES.find(f => f.id === matchId);
    if (!fixture) return Response.json({ error: 'Not found' }, { status: 404, headers });
    const h = TEAMS[fixture.home];
    const a = TEAMS[fixture.away];
    const odds = getMatchOdds(fixture.home, fixture.away);
    return Response.json({
      fixture,
      homeTeam: h,
      awayTeam: a,
      odds,
      homeScorers: GOLDEN_BOOT.filter(p => p.team === fixture.home),
      awayScorers: GOLDEN_BOOT.filter(p => p.team === fixture.away),
    }, { headers });
  }

  // Default: return everything
  return Response.json({
    tournament: {
      name: 'FIFA World Cup 2026',
      hosts: ['USA','Canada','Mexico'],
      dates: { start: '2026-06-11', end: '2026-07-19' },
      teams: 48, matches: 104,
    },
    groups: GROUPS,
    fixtures: FIXTURES.map(f => ({ ...f, odds: getMatchOdds(f.home, f.away) })),
    teams: TEAMS,
    tournamentOdds: TOURNAMENT_ODDS,
    goldenBoot: GOLDEN_BOOT,
  }, { headers });
}
