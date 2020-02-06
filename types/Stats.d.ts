export interface IAnnihilation {
  global: {
    kills: number;
    bowkills: number;
    wood: number;
    ores: number;
    nexus: number;
    digged: number;
  };

  season: {
    monthly: {
      kills: number;
      bowkills: number;
      wood: number;
      ores: number;
      nexus: number;
      digged: number;
    };
  };
}

export interface IBuildBattle {
  global: {
    games: number;
    wins: number;
  };

  season: {
    monthly: {
      games: number;
      wins: number;
    };
  };
}

export interface IBlockParty {
  global: {
    games: number;
    wins: number;
    levels: number;
  };

  season: {
    monthly: {
      games: number;
      wins: number;
      levels: number;
    };
  };
}

export interface IBedWars {
  global: {
    kills: number;
    deaths: number;
    games: number;
    wins: number;
    bedBreaked: number;
  };

  season: {
    monthly: {
      kills: number;
      deaths: number;
      games: number;
      wins: number;
      bedBreaked: number;
    };
  };
}

export interface IClashPoint {
  global: {
    kills: number;
    deaths: number;
    games: number;
    wins: number;
    resourcePointsBreaked: number;
  };

  season: {
    monthly: {
      kills: number;
      deaths: number;
      games: number;
      wins: number;
      resourcePointsBreaked: number;
    };
  };
}

export interface IDeathRun {
  global: {
    games: number;
    wins: number;
  };

  season: {
    monthly: {
      games: number;
      wins: number;
    };
  };
}

export interface IDuels {
  global: {
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
  };

  season: {
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
  };
}

export interface IGunGame {
  global: {
    kills: number;
    wins: number;
    games: number;
    levels: number;
  };

  season: {
    monthly: {
      kills: number;
      wins: number;
      games: number;
      levels: number;
    };
  };
}

export interface IHungerGames {
  global: {
    kills: number;
    wins: number;
    games: number;
  };

  season: {
    monthly: {
      kills: number;
      wins: number;
      games: number;
    };
  };
}

export interface IKitPvp {
  global: {
    kills: number;
    deaths: number;
    points: number;
  };

  season: {
    monthly: {
      kills: number;
      deaths: number;
    };
  };
}

export interface IMobWars {
  global: {
    games: number;
    wins: number;
    mobsKilled: number;
    mobsSended: number;
    maxIncome: number;
  };
  season: {
    monthly: {
      games: number;
      wins: number;
      mobsKilled: number;
      mobsSended: number;
    };
  };
}

export interface IPrison {
  global: {
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
  };
  season: {
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
  };
}

export interface ISkyWars {
  global: {
    wins: number;
    games: number;
    kills: number;
    deaths: number;
    arrowsFired: number;
    blocksBroken: number;
    blocksPlaced: number;
    currentWinStreak: number;
    winStreak: number;
  };

  season: {
    monthly: {
      wins: number;
      games: number;
      kills: number;
      deaths: number;
      arrowsFired: number;
      blocksBroken: number;
      blocksPlaced: number;
    };
  };
}

export interface IArcade {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
  };

  season: {
    monthly: {
      games: number;
      wins: number;
      kills: number;
      deaths: number;
    };
  };
}

export interface IBridge {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    points: number;
  };
}

export interface IJumpLeague {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    checkpoints: number;
  };
}

export interface IMurder {
  global: {
    games: number;
    total_wins: number;
    wins_as_innocent: number;
    wins_as_maniac: number;
    wins_as_detective: number;
    kills: number;
  };
}

export interface IPaintball {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
  };
}

export interface ISheep {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
  };
}

export interface ITurfWars {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
  };
}

export interface ISpleef {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    broken_blocks: number;
  };
}

export interface ITntTag {
  global: {
    games: number;
    wins: number;
    kills: number;
  };
}
export interface ITntRun {
  global: {
    games: number;
    wins: number;
    broken_blocks: number;
  };
}

export interface ILuckyWars {
  global: {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    lucky_blocks: number;
  };
}

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
