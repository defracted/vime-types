/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

// Annihilation

export interface IAnnihilation {
  global: IAnnihilationGlobal;
  season: IAnnihilationSeason;
}

export interface IAnnihilationGlobal {
  kills: number;
  bowkills: number;
  wood: number;
  ores: number;
  nexus: number;
  digged: number;
}

export interface IAnnihilationSeason {
  monthly: {
    kills: number;
    bowkills: number;
    wood: number;
    ores: number;
    nexus: number;
    digged: number;
  };
}

// Build Battle

export interface IBuildBattle {
  global: IBuildBattleGlobal;
  season: IBuildBattleSeason;
}

export interface IBuildBattleGlobal {
  games: number;
  wins: number;
}

export interface IBuildBattleSeason {
  monthly: {
    games: number;
    wins: number;
  };
}

// Block Party

export interface IBlockParty {
  global: IBlockPartyGlobal;
  season: IBlockPartySeason;
}

export interface IBlockPartyGlobal {
  games: number;
  wins: number;
  levels: number;
}

export interface IBlockPartySeason {
  monthly: {
    games: number;
    wins: number;
    levels: number;
  };
}

// Bed Wars

export interface IBedWars {
  global: IBedWarsGlobal;
  season: IBedWarsSeason;
}

export interface IBedWarsGlobal {
  kills: number;
  deaths: number;
  games: number;
  wins: number;
  bedBreaked: number;
}

export interface IBedWarsSeason {
  monthly: {
    kills: number;
    deaths: number;
    games: number;
    wins: number;
    bedBreaked: number;
  };
}

// Clash Point

export interface IClashPoint {
  global: IClashPointGlobal;
  season: IClashPointSeason;
}

export interface IClashPointGlobal {
  kills: number;
  deaths: number;
  games: number;
  wins: number;
  resourcePointsBreaked: number;
}

export interface IClashPointSeason {
  monthly: {
    kills: number;
    deaths: number;
    games: number;
    wins: number;
    resourcePointsBreaked: number;
  };
}

// Death Run

export interface IDeathRun {
  global: IDeathRunGlobal;
  season: IDeathRunSeason;
}

export interface IDeathRunGlobal {
  games: number;
  wins: number;
}

export interface IDeathRunSeason {
  monthly: {
    games: number;
    wins: number;
  };
}

// Duels

export interface IDuels {
  global: IDuelsGlobal;
  season: IDuelsSeason;
}

export interface IDuelsGlobal {
  solo_wins: number;
  solo_games: number;
  team_wins: number;
  team_games: number;
  ranked_games: number;
  ranked_wins: number;
  total_wins: number;
  total_games: number;
  wins_classic: number;
  wins_bow: number;
  wins_op: number;
  wins_potion: number;
  wins_uhc: number;
  wins_bwh: number;
  maxstrike: number;
}

export interface IDuelsSeason {
  monthly: {
    solo_wins: number;
    solo_games: number;
    team_wins: number;
    team_games: number;
    ranked_games: number;
    ranked_wins: number;
    total_wins: number;
    total_games: number;
    wins_classic: number;
    wins_bow: number;
    wins_op: number;
    wins_potion: number;
    wins_uhc: number;
    wins_bwh: number;
    rate: number;
    max_rate: number;
  };
}

// Gun Game

export interface IGunGame {
  global: IGunGameGlobal;
  season: IGunGameSeason;
}

export interface IGunGameGlobal {
  kills: number;
  wins: number;
  games: number;
  levels: number;
}

export interface IGunGameSeason {
  monthly: {
    kills: number;
    wins: number;
    games: number;
    levels: number;
  };
}

// Hunger Games

export interface IHungerGames {
  global: IHungerGamesGlobal;
  season: IHungerGamesSeason;
}

export interface IHungerGamesGlobal {
  kills: number;
  wins: number;
  games: number;
}

export interface IHungerGamesSeason {
  monthly: {
    kills: number;
    wins: number;
    games: number;
  };
}

// KitPVP

export interface IKitPvp {
  global: IKitPvpGlobal;
  season: IKitPvpSeason;
}

export interface IKitPvpGlobal {
  kills: number;
  deaths: number;
  points: number;
}

export interface IKitPvpSeason {
  monthly: {
    kills: number;
    deaths: number;
  };
}

// Mob Wars

export interface IMobWars {
  global: IMobWarsGlobal;
  season: IMobWarsSeason;
}

export interface IMobWarsGlobal {
  games: number;
  wins: number;
  mobsKilled: number;
  mobsSended: number;
  maxIncome: number;
}

export interface IMobWarsSeason {
  monthly: {
    games: number;
    wins: number;
    mobsKilled: number;
    mobsSended: number;
  };
}

// Prison

export interface IPrison {
  global: IPrisonGlobal;
  season: IPrisonSeason;
}

export interface IPrisonGlobal {
  total_blocks: number;
  earned_money: number;
  kills: number;
  deaths: number;
  mobs: number;
  blocks: {
    "1": number;
    "3": number;
    "12": number;
    "13": number;
    "14": number;
    "15": number;
    "16": number;
    "17": number;
    "22": number;
    "3number": number;
    "41": number;
    "42": number;
    "56": number;
    "57": number;
    "1number3": number;
    "133": number;
    "155": number;
    "172": number;
    "159:14": number;
    "159:5": number;
    "155:2": number;
    "35:13": number;
    "155:1": number;
    "159:1": number;
    "12:1": number;
  };
}

export interface IPrisonSeason {
  manual: {
    total_blocks: number;
    earned_money: number;
    kills: number;
    deaths: number;
    mobs: number;
    blocks: {
      "1": number;
      "3": number;
      "12": number;
      "13": number;
      "14": number;
      "15": number;
      "16": number;
      "56": number;
      "155:2": number;
      "155:1": number;
    };
  };
}

// Sky Wars

export interface ISkyWars {
  global: ISkyWarsGlobal;
  season: ISkyWarsSeason;
}

export interface ISkyWarsGlobal {
  wins: number;
  games: number;
  kills: number;
  deaths: number;
  arrowsFired: number;
  blocksBroken: number;
  blocksPlaced: number;
  currentWinStreak: number;
  winStreak: number;
}

export interface ISkyWarsSeason {
  monthly: {
    wins: number;
    games: number;
    kills: number;
    deaths: number;
    arrowsFired: number;
    blocksBroken: number;
    blocksPlaced: number;
  };
}

// Arcade

export interface IArcade {
  global: IArcadeGlobal;
  season: IArcadeSeason;
}

export interface IArcadeGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
}

export interface IArcadeSeason {
  monthly: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
  };
}

// The Bridge

export interface IBridge {
  global: IBridgeGlobal;
}

export interface IBridgeGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
  points: number;
}

// Jump League

export interface IJumpLeague {
  global: IJumpLeagueGlobal;
}

export interface IJumpLeagueGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
  checkpoints: number;
}

// Murder Mystery

export interface IMurder {
  global: IMurderGlobal;
}

export interface IMurderGlobal {
  games: number;
  total_wins: number;
  wins_as_innocent: number;
  wins_as_maniac: number;
  wins_as_detective: number;
  kills: number;
}

// Paintball

export interface IPaintball {
  global: IPaintballGlobal;
}

export interface IPaintballGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
}

// Sheep Wars

export interface ISheep {
  global: ISheepGlobal;
}

export interface ISheepGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
}

// Turf Wars

export interface ITurfWars {
  global: ITurfWarsGlobal;
}

export interface ITurfWarsGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
}

// Spleef

export interface ISpleef {
  global: ISpleefGlobal;
}

export interface ISpleefGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
  broken_blocks: number;
}

// TNT TAG

export interface ITntTag {
  global: ITntTagGlobal;
}

export interface ITntTagGlobal {
  games: number;
  wins: number;
  kills: number;
}

// TNT RUN

export interface ITntRun {
  global: ITntRunGlobal;
}

export interface ITntRunGlobal {
  games: number;
  wins: number;
  broken_blocks: number;
}

// Lucky Wars

export interface ILuckyWars {
  global: ILuckyWarsGlobal;
}

export interface ILuckyWarsGlobal {
  games: number;
  wins: number;
  kills: number;
  deaths: number;
  lucky_blocks: number;
}

// Сгруппированная стата по модели из API

export interface IUserStatsGroup {
  ANN: IAnnihilation;
  BB: IBuildBattle;
  BP: IBlockParty;
  BW: IBedWars;
  CP: IClashPoint;
  DR: IDeathRun;
  DUELS: IDuels;
  GG: IGunGame;
  HG: IHungerGames;
  KPVP: IKitPvp;
  MW: IMobWars;
  PRISON: IPrison;
  SW: ISkyWars;
  ARC: IArcade;
  BRIDGE: IBridge;
  JUMPLEAGUE: IJumpLeague;
  MURDER: IMurder;
  PAINTBALL: IPaintball;
  SHEEP: ISheep;
  TURFWARS: ITurfWars;
  SPLEEF: ISpleef;
  TNTTAG: ITntTag;
  TNTRUN: ITntRun;
  LUCKYWARS: ILuckyWars;
}
