// ─── FIFA World Cup 2026 — Complete Data ───────────────────────────────────
// Sources: FIFA.com draw (Dec 2025), betting markets (May 2026),
// ESPN / Sky Sports fixture schedule, Wikipedia squads.

export const TOURNAMENT = {
  name: 'FIFA World Cup 2026',
  hosts: ['USA', 'Canada', 'Mexico'],
  dates: { start: '2026-06-11', end: '2026-07-19' },
  teams: 48,
  matches: 104,
  finalVenue: 'MetLife Stadium, East Rutherford NJ',
};

// ─── 48 Teams ───────────────────────────────────────────────────────────────
// strength: ELO-derived 0-100 used for match prediction model
// tournamentOdds: American odds to win tournament (May 2026 markets)
// wc2022: last World Cup result
export const TEAMS = {
  // GROUP A
  MEX: {
    id: 'MEX', name: 'Mexico', flag: '🇲🇽', group: 'A',
    strength: 71, tournamentOdds: '+2800', impliedProb: 0.034,
    wcHistory: 'QF 1970 & 1986', wc2022: 'Group stage',
    recentForm: ['W','W','D','W','L'],
    keyPlayers: ['Raúl Jiménez','Hirving Lozano','Edson Álvarez'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 1.0,
    coach: 'Javier Aguirre',
    analysis: 'Tournament co-host with passionate support at Estadio Azteca. Dangerous on the break but inconsistent in big games. Jiménez the focal point up front.',
  },
  RSA: {
    id: 'RSA', name: 'South Africa', flag: '🇿🇦', group: 'A',
    strength: 40, tournamentOdds: '+25000', impliedProb: 0.004,
    wcHistory: 'Group stage 2010 (hosts)', wc2022: 'Did not qualify',
    recentForm: ['D','L','W','L','D'],
    keyPlayers: ['Percy Tau','Themba Zwane','Bongani Zungu'],
    avgGoalsFor: 0.9, avgGoalsAgainst: 1.3,
    coach: 'Hugo Broos',
    analysis: 'Return to the World Cup after missing 2022. Limited attacking quality but disciplined defensively. Percy Tau is their only genuine difference-maker.',
  },
  KOR: {
    id: 'KOR', name: 'South Korea', flag: '🇰🇷', group: 'A',
    strength: 57, tournamentOdds: '+7000', impliedProb: 0.014,
    wcHistory: 'SF 2002 (co-host)', wc2022: 'Round of 16',
    recentForm: ['W','D','W','W','L'],
    keyPlayers: ['Son Heung-min','Lee Kang-in','Kim Min-jae'],
    avgGoalsFor: 1.3, avgGoalsAgainst: 1.1,
    coach: 'Hong Myung-bo',
    analysis: 'Son Heung-min (34) may be playing his last WC. Lee Kang-in is the creative engine. Solid but not spectacular — could sneak through in a weak group.',
  },
  CZE: {
    id: 'CZE', name: 'Czechia', flag: '🇨🇿', group: 'A',
    strength: 54, tournamentOdds: '+9000', impliedProb: 0.011,
    wcHistory: 'Runner-up 1962 (as Czechoslovakia)', wc2022: 'Did not qualify',
    recentForm: ['W','L','D','W','W'],
    keyPlayers: ['Patrik Schick','Tomáš Souček','Vladimír Coufal'],
    avgGoalsFor: 1.2, avgGoalsAgainst: 1.0,
    coach: 'Ivan Hašek',
    analysis: 'Schick the lone world-class talent. Defensively solid with good Premier League representation. Could cause upsets if Schick is fit and firing.',
  },

  // GROUP B
  CAN: {
    id: 'CAN', name: 'Canada', flag: '🇨🇦', group: 'B',
    strength: 56, tournamentOdds: '+7500', impliedProb: 0.013,
    wcHistory: 'Group stage 1986', wc2022: 'Group stage',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Alphonso Davies','Jonathan David','Cyle Larin'],
    avgGoalsFor: 1.5, avgGoalsAgainst: 1.0,
    coach: 'Jesse Marsch',
    analysis: 'Home-tournament advantage. Davies is world-class; David is one of the most prolific strikers in Europe. Best chance in generations to go deep.',
  },
  SUI: {
    id: 'SUI', name: 'Switzerland', flag: '🇨🇭', group: 'B',
    strength: 63, tournamentOdds: '+5500', impliedProb: 0.018,
    wcHistory: 'QF 1954', wc2022: 'Quarterfinals',
    recentForm: ['W','D','W','W','D'],
    keyPlayers: ['Granit Xhaka','Xherdan Shaqiri','Breel Embolo'],
    avgGoalsFor: 1.3, avgGoalsAgainst: 0.9,
    coach: 'Murat Yakin',
    analysis: 'Consistently overperform expectations. Tournament-tested and defensively very organised. Could challenge for knockout stages again.',
  },
  QAT: {
    id: 'QAT', name: 'Qatar', flag: '🇶🇦', group: 'B',
    strength: 44, tournamentOdds: '+20000', impliedProb: 0.005,
    wcHistory: 'Group stage 2022 (hosts)', wc2022: 'Group stage',
    recentForm: ['L','D','W','L','D'],
    keyPlayers: ['Akram Afif','Almoez Ali','Bassam Al-Rawi'],
    avgGoalsFor: 0.8, avgGoalsAgainst: 1.5,
    coach: 'Félix Sánchez',
    analysis: 'Qualified via Asian zone. Second WC appearance after disappointing 2022 hosting. Afif won 2023 Asian Cup — only genuine quality player.',
  },
  BIH: {
    id: 'BIH', name: 'Bosnia-Herzegovina', flag: '🇧🇦', group: 'B',
    strength: 55, tournamentOdds: '+11000', impliedProb: 0.009,
    wcHistory: 'Group stage 2014', wc2022: 'Did not qualify',
    recentForm: ['W','W','D','L','W'],
    keyPlayers: ['Edin Džeko','Miralem Pjanić','Ermedin Demirović'],
    avgGoalsFor: 1.3, avgGoalsAgainst: 1.2,
    coach: 'Sergej Barbarez',
    analysis: 'Return to WC after 12-year absence. Džeko (38) provides experience up front; Demirović the exciting younger option. Tough group but capable of upset.',
  },

  // GROUP C
  BRA: {
    id: 'BRA', name: 'Brazil', flag: '🇧🇷', group: 'C',
    strength: 90, tournamentOdds: '+800', impliedProb: 0.111,
    wcHistory: 'Winners 5× (1958,1962,1970,1994,2002)', wc2022: 'Quarterfinals',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Vinicius Junior','Rodrygo','Endrick'],
    avgGoalsFor: 2.1, avgGoalsAgainst: 0.7,
    coach: 'Dorival Júnior',
    analysis: '5× world champions looking to end 24-year trophy drought. Vinicius is the best player in the world. Endrick (20) is the heir apparent. Fluid attack, solid defence.',
  },
  MAR: {
    id: 'MAR', name: 'Morocco', flag: '🇲🇦', group: 'C',
    strength: 62, tournamentOdds: '+5000', impliedProb: 0.020,
    wcHistory: 'SF 2022', wc2022: 'Semi-finals',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Hakim Ziyech','Achraf Hakimi','Youssef En-Nesyri'],
    avgGoalsFor: 1.2, avgGoalsAgainst: 0.7,
    coach: 'Walid Regragui',
    analysis: '2022 fairy-tale semi-finalists. Hakimi & Ziyech in their prime. Regragui has built a tactically disciplined unit that can upset anyone on the day.',
  },
  SCO: {
    id: 'SCO', name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C',
    strength: 54, tournamentOdds: '+9000', impliedProb: 0.011,
    wcHistory: 'Group stage 1990 (last appearance)', wc2022: 'Did not qualify',
    recentForm: ['W','D','W','L','D'],
    keyPlayers: ['Scott McTominay','Andy Robertson','Che Adams'],
    avgGoalsFor: 1.1, avgGoalsAgainst: 1.0,
    coach: 'Steve Clarke',
    analysis: 'First World Cup in 28 years. McTominay the talisman; Robertson the engine. Will be defensively solid but face steep task against Brazil.',
  },
  HAI: {
    id: 'HAI', name: 'Haiti', flag: '🇭🇹', group: 'C',
    strength: 40, tournamentOdds: '+25000', impliedProb: 0.004,
    wcHistory: 'Group stage 1974', wc2022: 'Did not qualify',
    recentForm: ['D','W','L','D','L'],
    keyPlayers: ['Frantzdy Pierrot','Duckens Nazon','Wilde-Donald Guerrier'],
    avgGoalsFor: 0.8, avgGoalsAgainst: 1.4,
    coach: 'Marc Collat',
    analysis: 'Dark horses only in the loosest sense. Qualified via CONCACAF, beating Cuba and Guyana. Limited technically but physically strong. Could cause a scare on their day.',
  },

  // GROUP D
  USA: {
    id: 'USA', name: 'USA', flag: '🇺🇸', group: 'D',
    strength: 70, tournamentOdds: '+3000', impliedProb: 0.032,
    wcHistory: 'SF 1930 (inaugural)', wc2022: 'Round of 16',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Christian Pulisic','Gio Reyna','Tyler Adams'],
    avgGoalsFor: 1.6, avgGoalsAgainst: 0.9,
    coach: 'Gregg Berhalter',
    analysis: 'Home-tournament favourites for the host spot. Pulisic at peak (27); Reyna finally healthy. Strong MLS depth. Strong motivation to perform on home soil.',
  },
  PRY: {
    id: 'PRY', name: 'Paraguay', flag: '🇵🇾', group: 'D',
    strength: 54, tournamentOdds: '+9000', impliedProb: 0.011,
    wcHistory: 'QF 2010', wc2022: 'Did not qualify',
    recentForm: ['D','W','W','L','D'],
    keyPlayers: ['Miguel Almirón','Antonio Sanabria','Gustavo Gómez'],
    avgGoalsFor: 1.0, avgGoalsAgainst: 1.1,
    coach: 'Daniel Garnero',
    analysis: 'Back at WC after missing 2022. Almirón is the driving force. Defensively organised; could nick points against the bigger teams.',
  },
  AUS: {
    id: 'AUS', name: 'Australia', flag: '🇦🇺', group: 'D',
    strength: 58, tournamentOdds: '+6500', impliedProb: 0.015,
    wcHistory: 'QF 2006', wc2022: 'Round of 16',
    recentForm: ['W','D','W','W','D'],
    keyPlayers: ['Mathew Ryan','Ajdin Hrustic','Mitch Duke'],
    avgGoalsFor: 1.2, avgGoalsAgainst: 1.0,
    coach: 'Tony Popovic',
    analysis: 'Socceroos built momentum in 2022. Hrustic is creative; defensive solidity gives them a chance in any game. Could challenge for top-2.',
  },
  TUR: {
    id: 'TUR', name: 'Turkey', flag: '🇹🇷', group: 'D',
    strength: 59, tournamentOdds: '+6500', impliedProb: 0.015,
    wcHistory: '3rd place 2002', wc2022: 'Did not qualify',
    recentForm: ['W','W','L','W','D'],
    keyPlayers: ['Hakan Çalhanoğlu','Arda Güler','Kenan Yıldız'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 1.1,
    coach: 'Vincenzo Montella',
    analysis: 'Euro 2024 dark horse revitalised by Güler and Yıldız. Çalhanoğlu controls tempo; they can hurt anyone. Watch for Güler — one of the most gifted youngsters in world football.',
  },

  // GROUP E
  GER: {
    id: 'GER', name: 'Germany', flag: '🇩🇪', group: 'E',
    strength: 86, tournamentOdds: '+1100', impliedProb: 0.083,
    wcHistory: 'Winners 4× (1954,1974,1990,2014)', wc2022: 'Group stage',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Florian Wirtz','Jamal Musiala','Kai Havertz'],
    avgGoalsFor: 2.0, avgGoalsAgainst: 0.8,
    coach: 'Julian Nagelsmann',
    analysis: '4× world champions desperate to erase 2018 & 2022 humiliations. Wirtz and Musiala are among the best in Europe. Tactically flexible under Nagelsmann. Strong contenders.',
  },
  CUW: {
    id: 'CUW', name: 'Curaçao', flag: '🇨🇼', group: 'E',
    strength: 38, tournamentOdds: '+30000', impliedProb: 0.003,
    wcHistory: 'First World Cup', wc2022: 'Did not qualify',
    recentForm: ['D','W','D','L','L'],
    keyPlayers: ['Leandro Bacuna','Rangelo Janga','Cuco Martina'],
    avgGoalsFor: 0.7, avgGoalsAgainst: 1.6,
    coach: 'Remko Bicentini',
    analysis: 'Historic first World Cup appearance. Small island nation relying on diaspora players from Dutch clubs. Will be honoured to compete; a point would be a miracle.',
  },
  CIV: {
    id: 'CIV', name: "Côte d'Ivoire", flag: '🇨🇮', group: 'E',
    strength: 58, tournamentOdds: '+7000', impliedProb: 0.014,
    wcHistory: 'Group stage 2006, 2010, 2014', wc2022: 'Did not qualify',
    recentForm: ['W','W','D','W','L'],
    keyPlayers: ['Sébastien Haller','Simon Adingra','Franck Kessié'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 1.1,
    coach: 'Emerse Faé',
    analysis: '2023 AFCON champions. Haller returned from testicular cancer to inspire them; Adingra (Brighton) electric on the wing. A genuine second-place threat in Group E.',
  },
  ECU: {
    id: 'ECU', name: 'Ecuador', flag: '🇪🇨', group: 'E',
    strength: 55, tournamentOdds: '+8000', impliedProb: 0.012,
    wcHistory: 'R16 2006', wc2022: 'Group stage',
    recentForm: ['D','W','L','W','D'],
    keyPlayers: ['Enner Valencia','Moisés Caicedo','Gonzalo Plata'],
    avgGoalsFor: 1.1, avgGoalsAgainst: 1.2,
    coach: 'Sébastien Beccacece',
    analysis: 'Caicedo (£115m Chelsea) is world-class. Valencia (37) one last WC hurrah. Can compete for second place; Caicedo-Estrada engine room is excellent.',
  },

  // GROUP F
  NED: {
    id: 'NED', name: 'Netherlands', flag: '🇳🇱', group: 'F',
    strength: 82, tournamentOdds: '+1400', impliedProb: 0.067,
    wcHistory: 'Runner-up 1974, 1978, 2010', wc2022: 'Quarterfinals',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Virgil van Dijk','Xavi Simons','Cody Gakpo'],
    avgGoalsFor: 1.8, avgGoalsAgainst: 0.8,
    coach: 'Ronald Koeman',
    analysis: 'Van Dijk leads one of Europe\'s most balanced squads. Simons & Gakpo offer pace and creativity. Koeman has them tactically tight. Dark horse to go all the way.',
  },
  JPN: {
    id: 'JPN', name: 'Japan', flag: '🇯🇵', group: 'F',
    strength: 60, tournamentOdds: '+6000', impliedProb: 0.016,
    wcHistory: 'R16 2002, 2010, 2018, 2022', wc2022: 'Round of 16',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Takefusa Kubo','Daichi Kamada','Ritsu Doan'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 0.9,
    coach: 'Hajime Moriyasu',
    analysis: 'The blue samurai beat Germany and Spain in 2022. Kubo is genuinely world-class. Technically excellent, with high pressing. Can definitely qualify from this group.',
  },
  TUN: {
    id: 'TUN', name: 'Tunisia', flag: '🇹🇳', group: 'F',
    strength: 53, tournamentOdds: '+10000', impliedProb: 0.010,
    wcHistory: 'Group stage 2022', wc2022: 'Group stage',
    recentForm: ['D','W','L','D','W'],
    keyPlayers: ['Wahbi Khazri','Youssef Msakni','Ellyes Skhiri'],
    avgGoalsFor: 1.0, avgGoalsAgainst: 1.2,
    coach: 'Jalel Kadri',
    analysis: 'Solid African side, defensively organised. Skhiri (Cologne) is their best player. Unlikely to progress but capable of grinding out a draw against weaker opponents.',
  },
  SWE: {
    id: 'SWE', name: 'Sweden', flag: '🇸🇪', group: 'F',
    strength: 55, tournamentOdds: '+8000', impliedProb: 0.012,
    wcHistory: '3rd place 1994 & 1950', wc2022: 'Did not qualify',
    recentForm: ['W','D','W','W','L'],
    keyPlayers: ['Viktor Gyökeres','Dejan Kulusevski','Alexander Isak'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 1.0,
    coach: 'Jon Dahl Tomasson',
    analysis: 'Post-Ibrahimović era proves Sweden remain competitive. Gyökeres (Sporting CP) was Europe\'s deadliest striker in 2024-25. Isak clinical at Newcastle. Could surprise.',
  },

  // GROUP G
  BEL: {
    id: 'BEL', name: 'Belgium', flag: '🇧🇪', group: 'G',
    strength: 80, tournamentOdds: '+1600', impliedProb: 0.059,
    wcHistory: '3rd place 2018', wc2022: 'Group stage',
    recentForm: ['W','D','W','W','W'],
    keyPlayers: ['Romelu Lukaku','Kevin De Bruyne','Lois Openda'],
    avgGoalsFor: 1.8, avgGoalsAgainst: 0.9,
    coach: 'Domenico Tedesco',
    analysis: 'New golden generation emerging. De Bruyne (34) still elite; Lukaku hungry to end career on high. Openda brilliant for Leipzig. Rebound from 2022 group-stage exit expected.',
  },
  EGY: {
    id: 'EGY', name: 'Egypt', flag: '🇪🇬', group: 'G',
    strength: 53, tournamentOdds: '+10000', impliedProb: 0.010,
    wcHistory: 'Group stage 1990', wc2022: 'Did not qualify',
    recentForm: ['W','D','D','W','L'],
    keyPlayers: ['Mohamed Salah','Mostafa Mohamed','Ahmed Hegazy'],
    avgGoalsFor: 1.3, avgGoalsAgainst: 0.9,
    coach: 'Hossam El-Badry',
    analysis: 'Salah (34) the only truly world-class player; entire team plan revolves around him. If Salah is fit and on form, Egypt can beat anyone on a given day.',
  },
  IRN: {
    id: 'IRN', name: 'Iran', flag: '🇮🇷', group: 'G',
    strength: 51, tournamentOdds: '+12000', impliedProb: 0.008,
    wcHistory: 'Group stage 2022', wc2022: 'Group stage',
    recentForm: ['W','D','L','W','D'],
    keyPlayers: ['Mehdi Taremi','Sardar Azmoun','Ali Karimi'],
    avgGoalsFor: 1.0, avgGoalsAgainst: 1.1,
    coach: 'Amir Ghalenoei',
    analysis: 'Taremi (Porto) is a quality striker. Defensive bloc, counter-attack style. Political turmoil within squad. Capable of stealing a point but unlikely to advance.',
  },
  NZL: {
    id: 'NZL', name: 'New Zealand', flag: '🇳🇿', group: 'G',
    strength: 42, tournamentOdds: '+20000', impliedProb: 0.005,
    wcHistory: 'Group stage 1982, 2010', wc2022: 'Did not qualify',
    recentForm: ['D','L','W','D','L'],
    keyPlayers: ['Clayton Lewis','Liberato Cacace','Joe Bell'],
    avgGoalsFor: 0.7, avgGoalsAgainst: 1.5,
    coach: 'Darren Bazeley',
    analysis: 'The All Whites return after missing 2022. Cacace (Southampton) is their standout. Will defend deep and hope for set-pieces. A draw would be an outstanding result.',
  },

  // GROUP H
  ESP: {
    id: 'ESP', name: 'Spain', flag: '🇪🇸', group: 'H',
    strength: 100, tournamentOdds: '+430', impliedProb: 0.189,
    wcHistory: 'Winners 2010', wc2022: 'Quarterfinals',
    recentForm: ['W','W','W','W','W'],
    keyPlayers: ['Lamine Yamal','Pedri','Mikel Oyarzabal'],
    avgGoalsFor: 2.4, avgGoalsAgainst: 0.6,
    coach: 'Luis de la Fuente',
    analysis: 'Tournament favourites. Lamine Yamal (18) is generational. Pedri, Gavi, Yamal, Nico Williams — the most technically gifted midfield/attack in the world. Defensively sound under De la Fuente. Huge favourites.',
  },
  CPV: {
    id: 'CPV', name: 'Cape Verde', flag: '🇨🇻', group: 'H',
    strength: 44, tournamentOdds: '+20000', impliedProb: 0.005,
    wcHistory: 'First World Cup', wc2022: 'Did not qualify',
    recentForm: ['W','D','W','L','D'],
    keyPlayers: ['Ryan Mendes','Garry Rodrigues','Jamiro Monteiro'],
    avgGoalsFor: 0.9, avgGoalsAgainst: 1.3,
    coach: 'Bubista',
    analysis: 'Historic first WC qualification. Compact, counter-attacking style honed in AFCON. Will park the bus vs Spain. A miracle against Uruguay could see them sneak 3rd.',
  },
  KSA: {
    id: 'KSA', name: 'Saudi Arabia', flag: '🇸🇦', group: 'H',
    strength: 50, tournamentOdds: '+12000', impliedProb: 0.008,
    wcHistory: 'R16 1994', wc2022: 'Group stage',
    recentForm: ['W','L','W','D','L'],
    keyPlayers: ['Saleh Al-Shehri','Sami Al-Najei','Mohammed Al-Burayk'],
    avgGoalsFor: 1.1, avgGoalsAgainst: 1.3,
    coach: 'Roberto Mancini',
    analysis: 'Beat Argentina in 2022 — proved they can shock the world. Oil-money domestic league investment. Mancini has organised them well tactically. Battle with Uruguay for 2nd.',
  },
  URU: {
    id: 'URU', name: 'Uruguay', flag: '🇺🇾', group: 'H',
    strength: 72, tournamentOdds: '+2500', impliedProb: 0.038,
    wcHistory: 'Winners 1930 & 1950; SF 2010', wc2022: 'Group stage',
    recentForm: ['W','W','D','W','L'],
    keyPlayers: ['Darwin Núñez','Federico Valverde','Rodrigo Bentancur'],
    avgGoalsFor: 1.5, avgGoalsAgainst: 0.9,
    coach: 'Marcelo Bielsa',
    analysis: 'Bielsa\'s Uruguay plays intense, high-energy football. Núñez explosive; Valverde drives everything. Despite 2022 group exit, quality to reach quarterfinals again. Clear 2nd-place pick.',
  },

  // GROUP I
  FRA: {
    id: 'FRA', name: 'France', flag: '🇫🇷', group: 'I',
    strength: 97, tournamentOdds: '+500', impliedProb: 0.167,
    wcHistory: 'Winners 1998 & 2018; Runner-up 2022', wc2022: 'Runners-up',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Kylian Mbappé','Antoine Griezmann','Aurélien Tchouaméni'],
    avgGoalsFor: 2.2, avgGoalsAgainst: 0.7,
    coach: 'Didier Deschamps',
    analysis: 'Mbappé (28 at tournament start) is the best player on the planet. 2022 runners-up motivated to go one better. Griezmann the perfect support; Tchouaméni anchors defence. Co-favourites with Spain.',
  },
  SEN: {
    id: 'SEN', name: 'Senegal', flag: '🇸🇳', group: 'I',
    strength: 63, tournamentOdds: '+4500', impliedProb: 0.022,
    wcHistory: 'QF 2002', wc2022: 'Round of 16',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Sadio Mané','Idrissa Gueye','Ismaïla Sarr'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 0.9,
    coach: 'Aliou Cissé',
    analysis: '2021 & 2023 AFCON champions. Mané (34) still key; Sarr emerging as his heir. Physically imposing, passionate. One of Africa\'s best shots at a deep run.',
  },
  NOR: {
    id: 'NOR', name: 'Norway', flag: '🇳🇴', group: 'I',
    strength: 62, tournamentOdds: '+5000', impliedProb: 0.020,
    wcHistory: 'Group stage 1998', wc2022: 'Did not qualify',
    recentForm: ['W','W','D','W','D'],
    keyPlayers: ['Erling Haaland','Martin Ødegaard','Alexander Sørloth'],
    avgGoalsFor: 1.8, avgGoalsAgainst: 1.0,
    coach: 'Ståle Solbakken',
    analysis: 'Haaland (26 at tournament) is the deadliest striker alive — 16 WC qualifying goals. Ødegaard the provider. Question: can Norway\'s defence last against France? Still, dark horse if Haaland fires.',
  },
  IRQ: {
    id: 'IRQ', name: 'Iraq', flag: '🇮🇶', group: 'I',
    strength: 45, tournamentOdds: '+20000', impliedProb: 0.005,
    wcHistory: 'Group stage 1986', wc2022: 'Did not qualify',
    recentForm: ['D','W','W','L','D'],
    keyPlayers: ['Amjad Attwan','Ahmed Yasin','Alaa Abbas'],
    avgGoalsFor: 0.9, avgGoalsAgainst: 1.2,
    coach: 'Jesús Casas',
    analysis: 'First World Cup since 1986. Qualified via Asian playoffs. Defensively minded; tactically limited. A goal against Norway would be a historic moment. Likely group-stage exit.',
  },

  // GROUP J
  ARG: {
    id: 'ARG', name: 'Argentina', flag: '🇦🇷', group: 'J',
    strength: 88, tournamentOdds: '+950', impliedProb: 0.095,
    wcHistory: 'Winners 1978, 1986 & 2022', wc2022: 'Champions',
    recentForm: ['W','W','W','W','D'],
    keyPlayers: ['Lionel Messi','Julián Álvarez','Rodrigo De Paul'],
    avgGoalsFor: 2.0, avgGoalsAgainst: 0.7,
    coach: 'Lionel Scaloni',
    analysis: 'Reigning champions. Messi (38) in what will be his farewell WC — expect maximum motivation. Álvarez & Lautaro the attack depth. Scaloni\'s system is world-class. Strong to repeat.',
  },
  ALG: {
    id: 'ALG', name: 'Algeria', flag: '🇩🇿', group: 'J',
    strength: 52, tournamentOdds: '+10000', impliedProb: 0.010,
    wcHistory: 'R16 2014', wc2022: 'Did not qualify',
    recentForm: ['W','D','W','L','D'],
    keyPlayers: ['Riyad Mahrez','Islam Slimani','Sofiane Feghouli'],
    avgGoalsFor: 1.1, avgGoalsAgainst: 1.1,
    coach: 'Vladimir Petkovic',
    analysis: 'Mahrez (35) the big name but declining. 2019 AFCON winners. Can be well-organised but face a massive task against Argentina. Realistic target: beat Austria and Jordan.',
  },
  AUT: {
    id: 'AUT', name: 'Austria', flag: '🇦🇹', group: 'J',
    strength: 58, tournamentOdds: '+8000', impliedProb: 0.012,
    wcHistory: '3rd place 1954', wc2022: 'Did not qualify',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['Marcel Sabitzer','Marko Arnautović','Christoph Baumgartner'],
    avgGoalsFor: 1.4, avgGoalsAgainst: 1.0,
    coach: 'Ralf Rangnick',
    analysis: 'Rangnick has built a high-press, hard-running team. Sabitzer excellent at club level; Arnautović (37) experienced campaigner. Austria actually have a genuine chance for 2nd in this group.',
  },
  JOR: {
    id: 'JOR', name: 'Jordan', flag: '🇯🇴', group: 'J',
    strength: 43, tournamentOdds: '+30000', impliedProb: 0.003,
    wcHistory: 'First World Cup', wc2022: 'Did not qualify',
    recentForm: ['D','D','L','W','D'],
    keyPlayers: ['Yazan Al-Naimat','Mohammed Al-Deek','Baha Faisal'],
    avgGoalsFor: 0.8, avgGoalsAgainst: 1.3,
    coach: 'Abdel Nasser Barakat',
    analysis: 'Historic debut. Qualified through Asian playoffs, reaching 2023 Asian Cup final. Disciplined but outclassed by top opposition. Getting past the group would be a major achievement.',
  },

  // GROUP K
  POR: {
    id: 'POR', name: 'Portugal', flag: '🇵🇹', group: 'K',
    strength: 84, tournamentOdds: '+1200', impliedProb: 0.077,
    wcHistory: '3rd place 1966', wc2022: 'Quarterfinals',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Cristiano Ronaldo','Bernardo Silva','Bruno Fernandes'],
    avgGoalsFor: 2.0, avgGoalsAgainst: 0.8,
    coach: 'Roberto Martínez',
    analysis: 'Ronaldo (41) becomes first player at 6 World Cups — 143 international goals. Bernardo Silva is the real engine. Félix, Bruno Fernandes, Leão behind Ronaldo = elite depth. Strong QF candidates.',
  },
  COL: {
    id: 'COL', name: 'Colombia', flag: '🇨🇴', group: 'K',
    strength: 65, tournamentOdds: '+3500', impliedProb: 0.028,
    wcHistory: 'QF 2014', wc2022: 'Did not qualify',
    recentForm: ['W','W','D','W','W'],
    keyPlayers: ['James Rodríguez','Luis Díaz','Jhon Durán'],
    avgGoalsFor: 1.5, avgGoalsAgainst: 0.9,
    coach: 'Néstor Lorenzo',
    analysis: '2024 Copa América runners-up. James Rodríguez returned to inspire them. Díaz electric down the left. Durán (Aston Villa) prolific. Best chance since 2014 to go deep.',
  },
  UZB: {
    id: 'UZB', name: 'Uzbekistan', flag: '🇺🇿', group: 'K',
    strength: 40, tournamentOdds: '+25000', impliedProb: 0.004,
    wcHistory: 'First World Cup', wc2022: 'Did not qualify',
    recentForm: ['W','D','L','W','D'],
    keyPlayers: ['Eldor Shomurodov','Jaloliddin Masharipov','Abbosbek Fayzullaev'],
    avgGoalsFor: 0.9, avgGoalsAgainst: 1.3,
    coach: 'Srecko Katanec',
    analysis: 'First World Cup appearance. Shomurodov (Roma) has European experience. Hard-working but outclassed. Reaching knockout stage would require dramatic upsets.',
  },
  COD: {
    id: 'COD', name: 'DR Congo', flag: '🇨🇩', group: 'K',
    strength: 40, tournamentOdds: '+25000', impliedProb: 0.004,
    wcHistory: 'QF 1974 (as Zaire)', wc2022: 'Did not qualify',
    recentForm: ['D','W','L','D','W'],
    keyPlayers: ['Chancel Mbemba','Yoane Wissa','Cédric Bakambu'],
    avgGoalsFor: 0.9, avgGoalsAgainst: 1.2,
    coach: 'Sébastien Desabre',
    analysis: 'First WC since 1974. Physical team with some European quality through Mbemba & Wissa. Could be dangerous on set-pieces. Unlikely to advance but not defenceless.',
  },

  // GROUP L
  ENG: {
    id: 'ENG', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L',
    strength: 93, tournamentOdds: '+650', impliedProb: 0.133,
    wcHistory: 'Winners 1966', wc2022: 'Quarterfinals',
    recentForm: ['W','W','W','D','W'],
    keyPlayers: ['Harry Kane','Jude Bellingham','Bukayo Saka'],
    avgGoalsFor: 2.1, avgGoalsAgainst: 0.7,
    coach: 'Gareth Southgate',
    analysis: '3rd favourites. Kane (32) finally in his peak tournament form — 60 Bayern goals in 2024-25. Bellingham runs the game. Saka clinical. Best England squad since 1966 — tournament dark horse or genuine contenders.',
  },
  CRO: {
    id: 'CRO', name: 'Croatia', flag: '🇭🇷', group: 'L',
    strength: 62, tournamentOdds: '+3500', impliedProb: 0.028,
    wcHistory: '3rd place 1998 & 2022', wc2022: '3rd place',
    recentForm: ['W','D','W','D','W'],
    keyPlayers: ['Luka Modrić','Marcelo Brozović','Ivan Perišić'],
    avgGoalsFor: 1.3, avgGoalsAgainst: 0.9,
    coach: 'Zlatko Dalić',
    analysis: 'Modrić (40!) defying age again. Brozović the engine; Perišić the threat. Croatia are tactically excellent and hard to break down. Could be a banana skin for England in MD1.',
  },
  GHA: {
    id: 'GHA', name: 'Ghana', flag: '🇬🇭', group: 'L',
    strength: 53, tournamentOdds: '+7500', impliedProb: 0.013,
    wcHistory: 'QF 2010', wc2022: 'Group stage',
    recentForm: ['W','D','L','W','D'],
    keyPlayers: ['Jordan Ayew','Mohammed Kudus','Thomas Partey'],
    avgGoalsFor: 1.1, avgGoalsAgainst: 1.2,
    coach: 'Otto Addo',
    analysis: 'Kudus (Ajax) is their standout talent. Partey provides defensive solidity. Will fight hard for second place. The Black Stars can beat Panama/Croatia on their day.',
  },
  PAN: {
    id: 'PAN', name: 'Panama', flag: '🇵🇦', group: 'L',
    strength: 38, tournamentOdds: '+30000', impliedProb: 0.003,
    wcHistory: 'Group stage 2018', wc2022: 'Did not qualify',
    recentForm: ['D','L','W','D','L'],
    keyPlayers: ['Ismael Díaz','Alfredo Stephens','Cecilio Waterman'],
    avgGoalsFor: 0.8, avgGoalsAgainst: 1.4,
    coach: 'Thomas Christiansen',
    analysis: 'Second WC appearance. Compact, physical team. Will frustrate bigger opponents defensively but limited attacking quality. A point against Ghana or Croatia would be celebrated as a triumph.',
  },
};

// ─── Group definitions ──────────────────────────────────────────────────────
export const GROUPS = {
  A: ['MEX','RSA','KOR','CZE'],
  B: ['CAN','SUI','QAT','BIH'],
  C: ['BRA','MAR','SCO','HAI'],
  D: ['USA','PRY','AUS','TUR'],
  E: ['GER','CUW','CIV','ECU'],
  F: ['NED','JPN','TUN','SWE'],
  G: ['BEL','EGY','IRN','NZL'],
  H: ['ESP','CPV','KSA','URU'],
  I: ['FRA','SEN','NOR','IRQ'],
  J: ['ARG','ALG','AUT','JOR'],
  K: ['POR','COL','UZB','COD'],
  L: ['ENG','CRO','GHA','PAN'],
};

// ─── All 72 Group-Stage Fixtures ────────────────────────────────────────────
// date: ISO (UTC), venue, matchday 1-3
export const FIXTURES = [
  // ── GROUP A ──
  { id:'A1', group:'A', matchday:1, home:'MEX', away:'RSA', date:'2026-06-11', time:'21:00', venue:'Estadio Azteca', city:'Mexico City', status:'upcoming' },
  { id:'A2', group:'A', matchday:1, home:'KOR', away:'CZE', date:'2026-06-12', time:'03:00', venue:'Estadio Akron', city:'Guadalajara', status:'upcoming' },
  { id:'A3', group:'A', matchday:2, home:'MEX', away:'KOR', date:'2026-06-17', time:'21:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'A4', group:'A', matchday:2, home:'RSA', away:'CZE', date:'2026-06-17', time:'18:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },
  { id:'A5', group:'A', matchday:3, home:'MEX', away:'CZE', date:'2026-06-22', time:'21:00', venue:'Estadio Azteca', city:'Mexico City', status:'upcoming' },
  { id:'A6', group:'A', matchday:3, home:'KOR', away:'RSA', date:'2026-06-22', time:'21:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },

  // ── GROUP B ──
  { id:'B1', group:'B', matchday:1, home:'CAN', away:'BIH', date:'2026-06-12', time:'23:00', venue:'BMO Field', city:'Toronto', status:'upcoming' },
  { id:'B2', group:'B', matchday:1, home:'SUI', away:'QAT', date:'2026-06-12', time:'20:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'B3', group:'B', matchday:2, home:'SUI', away:'BIH', date:'2026-06-18', time:'21:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'B4', group:'B', matchday:2, home:'CAN', away:'QAT', date:'2026-06-18', time:'18:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'B5', group:'B', matchday:3, home:'SUI', away:'CAN', date:'2026-06-24', time:'21:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'B6', group:'B', matchday:3, home:'BIH', away:'QAT', date:'2026-06-24', time:'21:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },

  // ── GROUP C ──
  { id:'C1', group:'C', matchday:1, home:'BRA', away:'MAR', date:'2026-06-13', time:'23:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },
  { id:'C2', group:'C', matchday:1, home:'HAI', away:'SCO', date:'2026-06-13', time:'20:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },
  { id:'C3', group:'C', matchday:2, home:'SCO', away:'MAR', date:'2026-06-19', time:'23:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },
  { id:'C4', group:'C', matchday:2, home:'BRA', away:'HAI', date:'2026-06-19', time:'20:00', venue:'Lincoln Financial Field', city:'Philadelphia PA', status:'upcoming' },
  { id:'C5', group:'C', matchday:3, home:'SCO', away:'BRA', date:'2026-06-24', time:'01:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'C6', group:'C', matchday:3, home:'MAR', away:'HAI', date:'2026-06-24', time:'01:00', venue:'Mercedes-Benz Stadium', city:'Atlanta GA', status:'upcoming' },

  // ── GROUP D ──
  { id:'D1', group:'D', matchday:1, home:'USA', away:'PRY', date:'2026-06-12', time:'21:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'D2', group:'D', matchday:1, home:'AUS', away:'TUR', date:'2026-06-13', time:'20:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'D3', group:'D', matchday:2, home:'USA', away:'AUS', date:'2026-06-18', time:'23:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },
  { id:'D4', group:'D', matchday:2, home:'PRY', away:'TUR', date:'2026-06-18', time:'20:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'D5', group:'D', matchday:3, home:'USA', away:'TUR', date:'2026-06-25', time:'01:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'D6', group:'D', matchday:3, home:'PRY', away:'AUS', date:'2026-06-25', time:'01:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },

  // ── GROUP E ──
  { id:'E1', group:'E', matchday:1, home:'GER', away:'CUW', date:'2026-06-14', time:'18:00', venue:'NRG Stadium', city:'Houston TX', status:'upcoming' },
  { id:'E2', group:'E', matchday:1, home:'CIV', away:'ECU', date:'2026-06-14', time:'21:00', venue:'Lincoln Financial Field', city:'Philadelphia PA', status:'upcoming' },
  { id:'E3', group:'E', matchday:2, home:'GER', away:'CIV', date:'2026-06-20', time:'23:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },
  { id:'E4', group:'E', matchday:2, home:'CUW', away:'ECU', date:'2026-06-20', time:'20:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'E5', group:'E', matchday:3, home:'GER', away:'ECU', date:'2026-06-25', time:'21:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'E6', group:'E', matchday:3, home:'CIV', away:'CUW', date:'2026-06-25', time:'21:00', venue:'Mercedes-Benz Stadium', city:'Atlanta GA', status:'upcoming' },

  // ── GROUP F ──
  { id:'F1', group:'F', matchday:1, home:'NED', away:'JPN', date:'2026-06-14', time:'23:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'F2', group:'F', matchday:1, home:'TUN', away:'SWE', date:'2026-06-14', time:'20:00', venue:'Estadio Akron', city:'Guadalajara', status:'upcoming' },
  { id:'F3', group:'F', matchday:2, home:'NED', away:'SWE', date:'2026-06-20', time:'21:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },
  { id:'F4', group:'F', matchday:2, home:'JPN', away:'TUN', date:'2026-06-20', time:'18:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'F5', group:'F', matchday:3, home:'NED', away:'TUN', date:'2026-06-26', time:'01:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'F6', group:'F', matchday:3, home:'JPN', away:'SWE', date:'2026-06-26', time:'01:00', venue:'NRG Stadium', city:'Houston TX', status:'upcoming' },

  // ── GROUP G ──
  { id:'G1', group:'G', matchday:1, home:'BEL', away:'EGY', date:'2026-06-15', time:'21:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },
  { id:'G2', group:'G', matchday:1, home:'IRN', away:'NZL', date:'2026-06-15', time:'18:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'G3', group:'G', matchday:2, home:'BEL', away:'IRN', date:'2026-06-21', time:'23:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'G4', group:'G', matchday:2, home:'EGY', away:'NZL', date:'2026-06-21', time:'20:00', venue:'Lincoln Financial Field', city:'Philadelphia PA', status:'upcoming' },
  { id:'G5', group:'G', matchday:3, home:'BEL', away:'NZL', date:'2026-06-26', time:'21:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },
  { id:'G6', group:'G', matchday:3, home:'EGY', away:'IRN', date:'2026-06-26', time:'21:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },

  // ── GROUP H ──
  { id:'H1', group:'H', matchday:1, home:'ESP', away:'CPV', date:'2026-06-15', time:'18:00', venue:'Mercedes-Benz Stadium', city:'Atlanta GA', status:'upcoming' },
  { id:'H2', group:'H', matchday:1, home:'KSA', away:'URU', date:'2026-06-15', time:'23:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'H3', group:'H', matchday:2, home:'ESP', away:'KSA', date:'2026-06-21', time:'01:00', venue:'NRG Stadium', city:'Houston TX', status:'upcoming' },
  { id:'H4', group:'H', matchday:2, home:'URU', away:'CPV', date:'2026-06-21', time:'18:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'H5', group:'H', matchday:3, home:'ESP', away:'URU', date:'2026-06-26', time:'21:00', venue:'Estadio Azteca', city:'Mexico City', status:'upcoming' },
  { id:'H6', group:'H', matchday:3, home:'CPV', away:'KSA', date:'2026-06-26', time:'21:00', venue:'Estadio Akron', city:'Guadalajara', status:'upcoming' },

  // ── GROUP I ──
  { id:'I1', group:'I', matchday:1, home:'FRA', away:'SEN', date:'2026-06-16', time:'21:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },
  { id:'I2', group:'I', matchday:1, home:'IRQ', away:'NOR', date:'2026-06-16', time:'18:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },
  { id:'I3', group:'I', matchday:2, home:'FRA', away:'IRQ', date:'2026-06-22', time:'23:00', venue:'Mercedes-Benz Stadium', city:'Atlanta GA', status:'upcoming' },
  { id:'I4', group:'I', matchday:2, home:'SEN', away:'NOR', date:'2026-06-22', time:'20:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'I5', group:'I', matchday:3, home:'NOR', away:'FRA', date:'2026-06-26', time:'01:00', venue:'Lincoln Financial Field', city:'Philadelphia PA', status:'upcoming' },
  { id:'I6', group:'I', matchday:3, home:'IRQ', away:'SEN', date:'2026-06-26', time:'01:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },

  // ── GROUP J ──
  { id:'J1', group:'J', matchday:1, home:'ARG', away:'ALG', date:'2026-06-16', time:'23:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'J2', group:'J', matchday:1, home:'AUT', away:'JOR', date:'2026-06-16', time:'20:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },
  { id:'J3', group:'J', matchday:2, home:'ARG', away:'AUT', date:'2026-06-22', time:'21:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'J4', group:'J', matchday:2, home:'ALG', away:'JOR', date:'2026-06-22', time:'18:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },
  { id:'J5', group:'J', matchday:3, home:'ARG', away:'JOR', date:'2026-06-27', time:'01:00', venue:'MetLife Stadium', city:'East Rutherford NJ', status:'upcoming' },
  { id:'J6', group:'J', matchday:3, home:'ALG', away:'AUT', date:'2026-06-27', time:'01:00', venue:'NRG Stadium', city:'Houston TX', status:'upcoming' },

  // ── GROUP K ──
  { id:'K1', group:'K', matchday:1, home:'POR', away:'COD', date:'2026-06-17', time:'21:00', venue:'NRG Stadium', city:'Houston TX', status:'upcoming' },
  { id:'K2', group:'K', matchday:1, home:'UZB', away:'COL', date:'2026-06-17', time:'18:00', venue:'Estadio Azteca', city:'Mexico City', status:'upcoming' },
  { id:'K3', group:'K', matchday:2, home:'POR', away:'UZB', date:'2026-06-23', time:'23:00', venue:'Lincoln Financial Field', city:'Philadelphia PA', status:'upcoming' },
  { id:'K4', group:'K', matchday:2, home:'COL', away:'COD', date:'2026-06-23', time:'20:00', venue:'Mercedes-Benz Stadium', city:'Atlanta GA', status:'upcoming' },
  { id:'K5', group:'K', matchday:3, home:'POR', away:'COL', date:'2026-06-27', time:'21:00', venue:'Hard Rock Stadium', city:'Miami FL', status:'upcoming' },
  { id:'K6', group:'K', matchday:3, home:'COD', away:'UZB', date:'2026-06-27', time:'21:00', venue:'BC Place', city:'Vancouver', status:'upcoming' },

  // ── GROUP L ──
  { id:'L1', group:'L', matchday:1, home:'ENG', away:'CRO', date:'2026-06-17', time:'23:00', venue:'AT&T Stadium', city:'Arlington TX', status:'upcoming' },
  { id:'L2', group:'L', matchday:1, home:'GHA', away:'PAN', date:'2026-06-17', time:'20:00', venue:'BMO Field', city:'Toronto', status:'upcoming' },
  { id:'L3', group:'L', matchday:2, home:'ENG', away:'GHA', date:'2026-06-23', time:'21:00', venue:'SoFi Stadium', city:'Inglewood CA', status:'upcoming' },
  { id:'L4', group:'L', matchday:2, home:'CRO', away:'PAN', date:'2026-06-23', time:'18:00', venue:'Estadio Akron', city:'Guadalajara', status:'upcoming' },
  { id:'L5', group:'L', matchday:3, home:'ENG', away:'PAN', date:'2026-06-27', time:'01:00', venue:'Lumen Field', city:'Seattle WA', status:'upcoming' },
  { id:'L6', group:'L', matchday:3, home:'CRO', away:'GHA', date:'2026-06-27', time:'01:00', venue:'Gillette Stadium', city:'Boston MA', status:'upcoming' },
];

// ─── Tournament winner odds ─────────────────────────────────────────────────
export const TOURNAMENT_ODDS = [
  { teamId:'ESP', odds:'+430',  impliedProb:18.9, decimal:5.30 },
  { teamId:'FRA', odds:'+500',  impliedProb:16.7, decimal:6.00 },
  { teamId:'ENG', odds:'+650',  impliedProb:13.3, decimal:7.50 },
  { teamId:'BRA', odds:'+800',  impliedProb:11.1, decimal:9.00 },
  { teamId:'ARG', odds:'+950',  impliedProb:9.5,  decimal:10.50 },
  { teamId:'GER', odds:'+1100', impliedProb:8.3,  decimal:12.00 },
  { teamId:'POR', odds:'+1200', impliedProb:7.7,  decimal:13.00 },
  { teamId:'NED', odds:'+1400', impliedProb:6.7,  decimal:15.00 },
  { teamId:'BEL', odds:'+1600', impliedProb:5.9,  decimal:17.00 },
  { teamId:'URU', odds:'+2500', impliedProb:3.8,  decimal:26.00 },
  { teamId:'MEX', odds:'+2800', impliedProb:3.4,  decimal:29.00 },
  { teamId:'USA', odds:'+3000', impliedProb:3.2,  decimal:31.00 },
  { teamId:'COL', odds:'+3500', impliedProb:2.8,  decimal:36.00 },
  { teamId:'CRO', odds:'+3500', impliedProb:2.8,  decimal:36.00 },
  { teamId:'SEN', odds:'+4500', impliedProb:2.2,  decimal:46.00 },
  { teamId:'ECU', odds:'+4500', impliedProb:2.2,  decimal:46.00 },
  { teamId:'MAR', odds:'+5000', impliedProb:2.0,  decimal:51.00 },
  { teamId:'NOR', odds:'+5000', impliedProb:2.0,  decimal:51.00 },
  { teamId:'SUI', odds:'+5500', impliedProb:1.8,  decimal:56.00 },
  { teamId:'JPN', odds:'+6000', impliedProb:1.6,  decimal:61.00 },
  { teamId:'AUS', odds:'+6500', impliedProb:1.5,  decimal:66.00 },
  { teamId:'TUR', odds:'+6500', impliedProb:1.5,  decimal:66.00 },
  { teamId:'KOR', odds:'+7000', impliedProb:1.4,  decimal:71.00 },
  { teamId:'CAN', odds:'+7500', impliedProb:1.3,  decimal:76.00 },
  { teamId:'GHA', odds:'+7500', impliedProb:1.3,  decimal:76.00 },
  { teamId:'AUT', odds:'+8000', impliedProb:1.2,  decimal:81.00 },
  { teamId:'SWE', odds:'+8000', impliedProb:1.2,  decimal:81.00 },
  { teamId:'ECU', odds:'+8000', impliedProb:1.2,  decimal:81.00 },
  { teamId:'SCO', odds:'+9000', impliedProb:1.1,  decimal:91.00 },
  { teamId:'PRY', odds:'+9000', impliedProb:1.1,  decimal:91.00 },
  { teamId:'CZE', odds:'+9000', impliedProb:1.1,  decimal:91.00 },
];

// ─── Top scorer / Golden Boot odds ─────────────────────────────────────────
export const GOLDEN_BOOT = [
  { player:'Kylian Mbappé',     team:'FRA', pos:'FW', club:'Real Madrid',    odds:'+600',  impliedProb:14.3, wcGoals:12, caps:89,  intGoals:50, analysis:'Deadly finisher. Won 2022 Golden Boot with 8 goals. France likely to go deep = more games = more goals.' },
  { player:'Harry Kane',        team:'ENG', pos:'FW', club:'Bayern Munich',  odds:'+700',  impliedProb:12.5, wcGoals:6,  caps:98,  intGoals:69, analysis:'Won 2018 Golden Boot. 60 Bayern goals in 2024-25. England in weak group so should start hot.' },
  { player:'Lionel Messi',      team:'ARG', pos:'FW', club:'Inter Miami',    odds:'+1200', impliedProb:7.7,  wcGoals:13, caps:189, intGoals:109, analysis:'Greatest of all time in his farewell WC. Won 2022 tournament. Emotional motivation at maximum. Hard to dismiss.' },
  { player:'Erling Haaland',    team:'NOR', pos:'FW', club:'Man City',       odds:'+1400', impliedProb:6.7,  wcGoals:0,  caps:40,  intGoals:34, analysis:'16 WC qualifying goals. Most prolific striker alive. Norway may exit at groups = fewer games. Needs to be extraordinary early.' },
  { player:'Lamine Yamal',      team:'ESP', pos:'FW', club:'Barcelona',      odds:'+1800', impliedProb:5.3,  wcGoals:0,  caps:25,  intGoals:8,  analysis:'Spain\'s 18-year-old superstar. Euro 2024 winner. Contributes goals and assists. Spain favourites = deep run. Excellent value.' },
  { player:'Mikel Oyarzabal',   team:'ESP', pos:'FW', club:'Real Sociedad',  odds:'+1800', impliedProb:5.3,  wcGoals:0,  caps:45,  intGoals:22, analysis:'Euro 2024 final winner. Clinical finisher. Benefits from Yamal and Pedri service. Dark horse for Golden Boot.' },
  { player:'Cristiano Ronaldo', team:'POR', pos:'FW', club:'Al-Nassr',       odds:'+2000', impliedProb:4.8,  wcGoals:8,  caps:226, intGoals:143, analysis:'Record international goals scorer (143). First player at 6 World Cups. Emotional farewell. Portugal in manageable group. Could reach 150.' },
  { player:'Vinicius Junior',   team:'BRA', pos:'FW', club:'Real Madrid',    odds:'+2200', impliedProb:4.3,  wcGoals:1,  caps:52,  intGoals:26, analysis:'Best player at Real Madrid. Brazil favourites to go deep. Explosive, creative, deadly — if Brazil unleash him, he can top score.' },
  { player:'Lautaro Martínez',  team:'ARG', pos:'FW', club:'Inter Milan',    odds:'+2500', impliedProb:3.8,  wcGoals:3,  caps:72,  intGoals:38, analysis:'Carried Inter to Serie A title. Excellent combination with Messi. If Messi drops deeper, Lautaro is the primary finisher.' },
  { player:'Antoine Griezmann', team:'FRA', pos:'MF', club:'Atlético Madrid',odds:'+2800', impliedProb:3.4,  wcGoals:7,  caps:137, intGoals:57, analysis:'Free agent but still elite. Works perfectly alongside Mbappé. 2018 WC winner. Consistently delivers in major tournaments.' },
  { player:'Bukayo Saka',       team:'ENG', pos:'FW', club:'Arsenal',        odds:'+3000', impliedProb:3.2,  wcGoals:0,  caps:58,  intGoals:16, analysis:'Arsenal\'s player of the season 2024-25. Clinical, creates and scores. England in weak group to build momentum. A genuine contender.' },
  { player:'Romelu Lukaku',     team:'BEL', pos:'FW', club:'Napoli',         odds:'+3200', impliedProb:3.0,  wcGoals:3,  caps:122, intGoals:73, analysis:'90+ international goals. Club form electric at Napoli. Belgium should progress easily giving him games to accumulate.' },
  { player:'Jude Bellingham',   team:'ENG', pos:'MF', club:'Real Madrid',    odds:'+3500', impliedProb:2.8,  wcGoals:1,  caps:48,  intGoals:12, analysis:'Box-to-box midfielder who arrives late to score. 23 years old at tournament — peak physical condition. Real Madrid star.' },
  { player:'Jonathan David',    team:'CAN', pos:'FW', club:'Lille',          odds:'+3500', impliedProb:2.8,  wcGoals:0,  caps:55,  intGoals:32, analysis:'Europe\'s top scorers list regular. Canada home-tournament = confidence + support. Could be the breakout star.' },
  { player:'Son Heung-min',     team:'KOR', pos:'FW', club:'Tottenham',      odds:'+4000', impliedProb:2.4,  wcGoals:3,  caps:136, intGoals:47, analysis:'Final WC likely. Emotional drive. Korea in competitive group A — Mex, RSA, Czechia — could score freely.' },
  { player:'Darwin Núñez',      team:'URU', pos:'FW', club:'Liverpool',      odds:'+4000', impliedProb:2.4,  wcGoals:1,  caps:42,  intGoals:22, analysis:'Raw power and pace under Bielsa. Liverpool\'s big-game scorer. Uruguay likely to reach knockouts. Underrated pick.' },
  { player:'Takefusa Kubo',     team:'JPN', pos:'FW', club:'Real Sociedad',  odds:'+4500', impliedProb:2.2,  wcGoals:0,  caps:36,  intGoals:11, analysis:'Japan\'s creative engine. Beaten Germany and Spain before. Kubo has the quality to fire on the world stage.' },
  { player:'Patrik Schick',     team:'CZE', pos:'FW', club:'Bayer Leverkusen',odds:'+4500',impliedProb:2.2,  wcGoals:0,  caps:58,  intGoals:33, analysis:'Euro 2020 Golden Boot winner. Clinical penalty-box finisher. If Czechia advance, Schick scores goals.' },
  { player:'Sadio Mané',        team:'SEN', pos:'FW', club:'Al-Nassr',       odds:'+5000', impliedProb:2.0,  wcGoals:1,  caps:105, intGoals:35, analysis:'AFCON legend. Still influential though less effective than peak. Senegal could advance from Group I.' },
  { player:'Viktor Gyökeres',   team:'SWE', pos:'FW', club:'Arsenal',        odds:'+5000', impliedProb:2.0,  wcGoals:0,  caps:28,  intGoals:16, analysis:'64 goals in 2024-25 season. Relentless poacher. Sweden vs Netherlands/Japan — could claim memorable moments.' },
  { player:'Mohamed Salah',     team:'EGY', pos:'FW', club:'Liverpool',      odds:'+5500', impliedProb:1.8,  wcGoals:0,  caps:102, intGoals:57, analysis:'Liverpool legend in his prime. Egypt\'s whole attack. If Egypt advance past Belgium, Salah will score. Long-shot value.' },
  { player:'Arda Güler',        team:'TUR', pos:'MF', club:'Real Madrid',    odds:'+6000', impliedProb:1.6,  wcGoals:0,  caps:25,  intGoals:9,  analysis:'Real Madrid starlet at 20 years old. Brilliant with the ball. First WC — could emerge as the tournament\'s teenage sensation.' },
  { player:'Endrick',           team:'BRA', pos:'FW', club:'Real Madrid',    odds:'+6000', impliedProb:1.6,  wcGoals:0,  caps:15,  intGoals:7,  analysis:'Brazil\'s 20-year-old prodigy. First WC. Playing for Real Madrid — fearless. Could be the tournament\'s breakout star.' },
  { player:'Alphonso Davies',   team:'CAN', pos:'DF', club:'Bayern Munich',  odds:'+6500', impliedProb:1.5,  wcGoals:0,  caps:62,  intGoals:13, analysis:'Left-back who bombs forward. Home-tournament star. Not a traditional forward but scores in big moments.' },
  { player:'Florian Wirtz',     team:'GER', pos:'MF', club:'Bayer Leverkusen',odds:'+7000',impliedProb:1.4, wcGoals:0,  caps:30,  intGoals:10, analysis:'Germany\'s biggest talent. 22 years old. Creative midfielder who arrives late to score. First WC — expect impact.' },
];

// ─── Match analysis helper ──────────────────────────────────────────────────
// Poisson-based expected-goals model from team strength ratings.
export function getMatchOdds(homeId, awayId) {
  const h = TEAMS[homeId];
  const a = TEAMS[awayId];
  if (!h || !a) return null;

  const diff = h.strength - a.strength;
  const xGH = Math.max(0.3, 1.25 + diff * 0.012);
  const xGA = Math.max(0.3, 1.25 - diff * 0.012);

  // Logistic win probability
  const winH  = parseFloat((1 / (1 + Math.exp(-diff * 0.07))).toFixed(3));
  const winA  = parseFloat((1 / (1 + Math.exp( diff * 0.07))).toFixed(3));
  const draw  = parseFloat((1 - winH - winA).toFixed(3));

  // Most-likely exact score via Poisson
  const poissonProb = (k, lam) => {
    let p = Math.exp(-lam);
    for (let i = 0; i < k; i++) p *= lam / (i + 1);
    return p;
  };

  let bestScore = { h: 1, a: 0 };
  let bestP = 0;
  for (let gh = 0; gh <= 5; gh++) {
    for (let ga = 0; ga <= 5; ga++) {
      const p = poissonProb(gh, xGH) * poissonProb(ga, xGA);
      if (p > bestP) { bestP = p; bestScore = { h: gh, a: ga }; }
    }
  }

  // Second most-likely score
  let secondScore = { h: 1, a: 1 };
  let secondP = 0;
  for (let gh = 0; gh <= 5; gh++) {
    for (let ga = 0; ga <= 5; ga++) {
      const p = poissonProb(gh, xGH) * poissonProb(ga, xGA);
      if (p > secondP && !(gh === bestScore.h && ga === bestScore.a)) {
        secondP = p; secondScore = { h: gh, a: ga };
      }
    }
  }

  return {
    xGHome: parseFloat(xGH.toFixed(2)),
    xGAway: parseFloat(xGA.toFixed(2)),
    winHome: winH,
    draw,
    winAway: winA,
    likelyScore: `${bestScore.h}-${bestScore.a}`,
    altScore: `${secondScore.h}-${secondScore.a}`,
    likelyScoreProb: parseFloat((bestP * 100).toFixed(1)),
    scorritoTip: winH > 0.6
      ? `Back ${h.name} — pick ${bestScore.h}-${bestScore.a} or ${secondScore.h}-${secondScore.a}.`
      : winA > 0.6
        ? `Back ${a.name} — pick ${bestScore.h}-${bestScore.a} or ${secondScore.h}-${secondScore.a}.`
        : `Even game — ${bestScore.h}-${bestScore.a} or ${bestScore.h === bestScore.a ? bestScore.h+1+'-'+bestScore.a : bestScore.h+'-'+(bestScore.a+1)} both viable.`,
  };
}

// ─── Scorito scoring rules ──────────────────────────────────────────────────
export function calcScoritoPoints(predicted, actual) {
  if (!actual) return null;
  const { home: ph, away: pa } = predicted;
  const { home: ah, away: aa } = actual;
  if (ph === ah && pa === aa) return 3;     // exact score
  if (Math.sign(ph - pa) === Math.sign(ah - aa)) return 1; // correct result
  return 0;
}
