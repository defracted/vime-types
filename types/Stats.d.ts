export interface IAnnihilation {
  global: {
    kills: bigint;
    bowkills: bigint;
    wood: bigint;
    ores: bigint;
    nexus: bigint;
    digged: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      bowkills: bigint;
      wood: bigint;
      ores: bigint;
      nexus: bigint;
      digged: bigint;
    };
  };
}

export interface IBuildBattle {
  global: {
    games: bigint;
    wins: bigint;
  };

  season: {
    monthly: {
      games: bigint;
      wins: bigint;
    };
  };
}

export interface IBlockParty {
  global: {
    games: bigint;
    wins: bigint;
    levels: bigint;
  };

  season: {
    monthly: {
      games: bigint;
      wins: bigint;
      levels: bigint;
    };
  };
}

export interface IBedWars {
  global: {
    kills: bigint;
    deaths: bigint;
    games: bigint;
    wins: bigint;
    bedBreaked: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      deaths: bigint;
      games: bigint;
      wins: bigint;
      bedBreaked: bigint;
    };
  };
}

export interface IClashPoint {
  global: {
    kills: bigint;
    deaths: bigint;
    games: bigint;
    wins: bigint;
    resourcePointsBreaked: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      deaths: bigint;
      games: bigint;
      wins: bigint;
      resourcePointsBreaked: bigint;
    };
  };
}

export interface IDeathRun {
  global: {
    games: bigint;
    wins: bigint;
  };

  season: {
    monthly: {
      games: bigint;
      wins: bigint;
    };
  };
}

export interface IDuels {
  global: {
    solo_wins: bigint;
    solo_games: bigint;
    team_wins: bigint;
    team_games: bigint;
    ranked_games: bigint;
    ranked_wins: bigint;
    total_wins: bigint;
    total_games: bigint;
    wins_classic: bigint;
    wins_bow: bigint;
    wins_op: bigint;
    wins_potion: bigint;
    wins_uhc: bigint;
    wins_bwh: bigint;
    maxstrike: bigint;
  };

  season: {
    monthly: {
      solo_wins: bigint;
      solo_games: bigint;
      team_wins: bigint;
      team_games: bigint;
      ranked_games: bigint;
      ranked_wins: bigint;
      total_wins: bigint;
      total_games: bigint;
      wins_classic: bigint;
      wins_bow: bigint;
      wins_op: bigint;
      wins_potion: bigint;
      wins_uhc: bigint;
      wins_bwh: bigint;
      rate: bigint;
      max_rate: bigint;
    };
  };
}

export interface IGunGame {
  global: {
    kills: bigint;
    wins: bigint;
    games: bigint;
    levels: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      wins: bigint;
      games: bigint;
      levels: bigint;
    };
  };
}

export interface IHungerGames {
  global: {
    kills: bigint;
    wins: bigint;
    games: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      wins: bigint;
      games: bigint;
    };
  };
}

export interface IKitPvp {
  global: {
    kills: bigint;
    deaths: bigint;
    points: bigint;
  };

  season: {
    monthly: {
      kills: bigint;
      deaths: bigint;
    };
  };
}

export interface IMobWars {
  global: {
    games: bigint;
    wins: bigint;
    mobsKilled: bigint;
    mobsSended: bigint;
    maxIncome: bigint;
  };
  season: {
    monthly: {
      games: bigint;
      wins: bigint;
      mobsKilled: bigint;
      mobsSended: bigint;
    };
  };
}

export interface IPrison {
  global: {
    total_blocks: bigint;
    earned_money: bigint;
    kills: bigint;
    deaths: bigint;
    mobs: bigint;
    blocks: {
      "1": bigint;
      "3": bigint;
      "12": bigint;
      "13": bigint;
      "14": bigint;
      "15": bigint;
      "16": bigint;
      "17": bigint;
      "22": bigint;
      "3bigint": bigint;
      "41": bigint;
      "42": bigint;
      "56": bigint;
      "57": bigint;
      "1bigint3": bigint;
      "133": bigint;
      "155": bigint;
      "172": bigint;
      "159:14": bigint;
      "159:5": bigint;
      "155:2": bigint;
      "35:13": bigint;
      "155:1": bigint;
      "159:1": bigint;
      "12:1": bigint;
    };
  };
  season: {
    manual: {
      total_blocks: bigint;
      earned_money: bigint;
      kills: bigint;
      deaths: bigint;
      mobs: bigint;
      blocks: {
        "1": bigint;
        "3": bigint;
        "12": bigint;
        "13": bigint;
        "14": bigint;
        "15": bigint;
        "16": bigint;
        "56": bigint;
        "155:2": bigint;
        "155:1": bigint;
      };
    };
  };
}

export interface ISkyWars {
  global: {
    wins: bigint;
    games: bigint;
    kills: bigint;
    deaths: bigint;
    arrowsFired: bigint;
    blocksBroken: bigint;
    blocksPlaced: bigint;
    currentWinStreak: bigint;
    winStreak: bigint;
  };

  season: {
    monthly: {
      wins: bigint;
      games: bigint;
      kills: bigint;
      deaths: bigint;
      arrowsFired: bigint;
      blocksBroken: bigint;
      blocksPlaced: bigint;
    };
  };
}

export interface IArcade {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
  };

  season: {
    monthly: {
      games: bigint;
      wins: bigint;
      kills: bigint;
      deaths: bigint;
    };
  };
}

export interface IBridge {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
    points: bigint;
  };
}

export interface IJumpLeague {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
    checkpoints: bigint;
  };
}

export interface IMurder {
  global: {
    games: bigint;
    total_wins: bigint;
    wins_as_innocent: bigint;
    wins_as_maniac: bigint;
    wins_as_detective: bigint;
    kills: bigint;
  };
}

export interface IPaintball {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
  };
}

export interface ISheep {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
  };
}

export interface ITurfWars {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
  };
}

export interface ISpleef {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
    broken_blocks: bigint;
  };
}

export interface ITntTag {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
  };
}
export interface ITntRun {
  global: {
    games: bigint;
    wins: bigint;
    broken_blocks: bigint;
  };
}

export interface ILuckyWars {
  global: {
    games: bigint;
    wins: bigint;
    kills: bigint;
    deaths: bigint;
    lucky_blocks: bigint;
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
