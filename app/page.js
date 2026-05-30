import Link from 'next/link';
import { TOURNAMENT_ODDS, GOLDEN_BOOT, FIXTURES, TEAMS, getMatchOdds } from '../lib/data';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day:'numeric', month:'short' });
}

export default function Dashboard() {
  const topOdds   = TOURNAMENT_ODDS.slice(0, 8);
  const topScorer = GOLDEN_BOOT.slice(0, 6);

  // Next 6 upcoming fixtures
  const upcoming = FIXTURES.slice(0, 6);

  return (
    <div className="space-y-8">

      {/* Hero */}
      <div className="card p-6 text-center" style={{ background: 'linear-gradient(135deg,#0a2e14 0%,#0f2d1a 100%)' }}>
        <div className="text-5xl mb-3">🏆</div>
        <h1 className="text-3xl font-bold text-green-400 mb-1">FIFA World Cup 2026</h1>
        <p className="text-slate-400">11 Jun – 19 Jul · USA / Canada / Mexico · 48 teams · 104 matches</p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <Link href="/scorrito" className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-2 rounded-lg transition-colors">
            Fill Scorrito
          </Link>
          <Link href="/matches" className="border border-green-700 hover:border-green-500 text-green-400 font-semibold px-6 py-2 rounded-lg transition-colors">
            All Matches
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Tournament favourites */}
        <div className="card p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Tournament Odds</h2>
          <div className="space-y-3">
            {topOdds.map((o, i) => {
              const t = TEAMS[o.teamId];
              if (!t) return null;
              const pct = o.impliedProb;
              return (
                <div key={o.teamId}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm flex items-center gap-1.5">
                      <span>{t.flag}</span>
                      <span className={i === 0 ? 'text-yellow-400 font-semibold' : 'text-slate-200'}>{t.name}</span>
                    </span>
                    <span className="text-xs text-green-400 font-mono">{o.odds}</span>
                  </div>
                  <div className="progress-bar">
                    <div style={{ width:`${pct * 4}%`, background: i===0?'#eab308':'#22c55e', height:'100%' }} />
                  </div>
                  <span className="text-xs text-slate-500">{pct}%</span>
                </div>
              );
            })}
          </div>
          <Link href="/groups" className="text-xs text-green-500 hover:text-green-400 mt-4 inline-block">
            View all groups →
          </Link>
        </div>

        {/* Top scorer odds */}
        <div className="card p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-widest mb-4">Golden Boot Odds</h2>
          <div className="space-y-3">
            {topScorer.map((p, i) => {
              const t = TEAMS[p.team];
              return (
                <div key={p.player} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs w-4">{i+1}</span>
                    <span className="text-base">{t?.flag}</span>
                    <div>
                      <div className="text-sm text-slate-200 font-medium leading-tight">{p.player}</div>
                      <div className="text-xs text-slate-500">{p.club}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-yellow-400 font-mono font-semibold">{p.odds}</div>
                    <div className="text-xs text-slate-500">{p.impliedProb}%</div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href="/players" className="text-xs text-yellow-500 hover:text-yellow-400 mt-4 inline-block">
            All 25 top scorers →
          </Link>
        </div>

        {/* Upcoming matches */}
        <div className="card p-5 lg:col-span-1">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Opening Fixtures</h2>
          <div className="space-y-3">
            {upcoming.map(f => {
              const h = TEAMS[f.home];
              const a = TEAMS[f.away];
              const odds = getMatchOdds(f.home, f.away);
              return (
                <div key={f.id} className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500 text-xs w-12 shrink-0">{formatDate(f.date)}</span>
                  <span className="flex items-center gap-1">
                    <span>{h?.flag}</span>
                    <span className="font-medium text-slate-200">{h?.name}</span>
                  </span>
                  <span className="text-slate-500 text-xs">vs</span>
                  <span className="flex items-center gap-1">
                    <span>{a?.flag}</span>
                    <span className="font-medium text-slate-200">{a?.name}</span>
                  </span>
                  <span className="ml-auto text-xs font-mono text-green-400">{odds?.likelyScore}</span>
                </div>
              );
            })}
          </div>
          <Link href="/matches" className="text-xs text-blue-500 hover:text-blue-400 mt-4 inline-block">
            All 72 group matches →
          </Link>
        </div>

      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label:'Favourite', value:'Spain', sub:'+430', color:'text-yellow-400' },
          { label:'Golden Boot Fav', value:'Mbappé', sub:'+600', color:'text-blue-400' },
          { label:'Group Stage', value:'11 Jun – 27 Jun', sub:'72 matches', color:'text-green-400' },
          { label:'Final', value:'19 Jul 2026', sub:'MetLife Stadium, NJ', color:'text-purple-400' },
        ].map(s => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{s.label}</div>
            <div className={`font-bold text-lg ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500">{s.sub}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
