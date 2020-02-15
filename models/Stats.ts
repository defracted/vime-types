/** Статистика по Annihilation */
export interface IAnnihilation {
  /** Полная статистика */
  global: IAnnihilationGlobal;
  /** Статистика за текущий сезон */
  season: IAnnihilationSeason;
}

/** Полная статистика по Annihilation */
export interface IAnnihilationGlobal {
  /** Количество убийств */
  kills: number;
  /** Количество убийств (с помощью лука) */
  bowkills: number;
  /** Срублено дерева */
  wood: number;
  /** Добыто руды */
  ores: number;
  /** Ударов по базам */
  nexus: number;
  /** Добыто грязи */
  digged: number;
}

/** Сезонная статистика по Annihilation */
export interface IAnnihilationSeason {
  /** Статистика за текущий месяц */
  monthly: IAnnihilationGlobal;
}

/** Статистика по BuildBattle */
export interface IBuildBattle {
  /** Полная статистика */
  global: IBuildBattleGlobal;
  /** Статистика за текущий сезон */
  season: IBuildBattleSeason;
}

/** Полная статистика по BuildBattle */
export interface IBuildBattleGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
}

/** Сезонная статистика по BuildBattle */
export interface IBuildBattleSeason {
  /** Статистика за текущий месяц */
  monthly: IBuildBattleGlobal;
}

/** Статистика по BlockParty */
export interface IBlockParty {
  /** Полная статистика */
  global: IBlockPartyGlobal;
  /** Статистика за текущий сезон */
  season: IBlockPartySeason;
}

/** Полная статистика по BlockParty */
export interface IBlockPartyGlobal {
  /** Количество игр */
  games: number;
  /** Количество побед */
  wins: number;
  /** Набрано уровней */
  levels: number;
}

/** Сезонная статистика по BlockParty */
export interface IBlockPartySeason {
  /** Статистика за текущий месяц */
  monthly: IBlockPartyGlobal;
}

/** Статистика по BedWars */
export interface IBedWars {
  /** Полная статистика */
  global: IBedWarsGlobal;
  /** Сезонная статистика */
  season: IBedWarsSeason;
}

/** Полная статистика по BedWars */
export interface IBedWarsGlobal {
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Количество игр */
  games: number;
  /** Побед */
  wins: number;
  /** Сломанных кроватей */
  bedBreaked: number;
}

/** Сезонная статистика по BedWars */
export interface IBedWarsSeason {
  /** Статистика за текущий месяц */
  monthly: IBedWarsGlobal;
}

/** Статистика по ClashPoint */
export interface IClashPoint {
  /** Полная статистика */
  global: IClashPointGlobal;
  /** Сезонная статистика */
  season: IClashPointSeason;
}

/** Полная статистика по ClashPoint */
export interface IClashPointGlobal {
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Количество игр */
  games: number;
  /** Побед */
  wins: number;
  /** Сломано ресурсных точек */
  resourcePointsBreaked: number;
}

/** Сезонная статистика по ClashPoint */
export interface IClashPointSeason {
  /** Статистика за текущий месяц */
  monthly: IClashPointGlobal;
}

/** Статистика по DeathRun */
export interface IDeathRun {
  /** Полная статистика */
  global: IDeathRunGlobal;
  /** Сезонная статистика */
  season: IDeathRunSeason;
}

/** Полная статистика по DeathRun */
export interface IDeathRunGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
}

/** Сезонная статистика */
export interface IDeathRunSeason {
  /** Статистика за текущий месяц */
  monthly: IDeathRunGlobal;
}

/** Статистика для Duels */
export interface IDuels {
  /** Полная статистика */
  global: IDuelsGlobal;
  /** Сезонная статистика */
  season: IDuelsSeason;
}

/** Полная статистика для Duels */
export interface IDuelsGlobal {
  /** Одиночных побед */
  solo_wins: number;
  /** Одиночных игр */
  solo_games: number;
  /** Командных побед */
  team_wins: number;
  /** Командных игр */
  team_games: number;
  /** Рейтинговых игр */
  ranked_games: number;
  /** Рейтинговых побед */
  ranked_wins: number;
  /** Общее количество побед */
  total_wins: number;
  /** Общее количество игр */
  total_games: number;
  /** Побед в Classic */
  wins_classic: number;
  /** Побед в Bow */
  wins_bow: number;
  /** Побед в OP */
  wins_op: number;
  /** Побед в Potion */
  wins_potion: number;
  /** Побед в UHC */
  wins_uhc: number;
  /** Побед в BedWars Hard */
  wins_bwh: number;
  /** Максимально длинная серия побед */
  maxstrike: number;
}

/** Сезонная статистика для Duels */
export interface IDuelsSeason {
  /** Статистика за текущий месяц */
  monthly: Omit<IDuelsGlobal, "maxstrike"> & {
    /** Текущий рейтинг */
    rate: number;
    /** Максимальный рейтинг */
    max_rate: number;
  };
}

/** Статистика для GunGame */
export interface IGunGame {
  /** Полная статистика */
  global: IGunGameGlobal;
  /** Сезонная статистика */
  season: IGunGameSeason;
}

/** Полная статистика для GunGame */
export interface IGunGameGlobal {
  /** Убийств */
  kills: number;
  /** Побед */
  wins: number;
  /** Игр сыграно */
  games: number;
  /** Уровней набрано */
  levels: number;
}

/** Сезонная статистика для GunGame */
export interface IGunGameSeason {
  /** Статистика за текущий месяц */
  monthly: IGunGameGlobal;
}

/** Статистика для HungerGames */
export interface IHungerGames {
  /** Полная статистика */
  global: IHungerGamesGlobal;
  /** Сезонная статистика */
  season: IHungerGamesSeason;
}

/** Полная статистика для HungerGames */
export interface IHungerGamesGlobal {
  /** Убийств */
  kills: number;
  /** Побед */
  wins: number;
  /** Игр сыграно */
  games: number;
}

/** Сезонная статистика для HungerGame */
export interface IHungerGamesSeason {
  /** Статистика за текущий месяц */
  monthly: IHungerGamesGlobal;
}

/** Статистика для KitPVP */
export interface IKitPvp {
  /** Полная статистика */
  global: IKitPvpGlobal;
  /** Сезонная статистика */
  season: IKitPvpSeason;
}

/** Полная статистика для KitPVP */
export interface IKitPvpGlobal {
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Набрано очков */
  points: number;
}

/** Сезонная статистика для KitPVP */
export interface IKitPvpSeason {
  /** Статистика за текущий месяц */
  monthly: Omit<IKitPvpGlobal, "points">;
}

/** Статистика для MobWars */
export interface IMobWars {
  /** Полная статистика */
  global: IMobWarsGlobal;
  /** Сезонная статистика */
  season: IMobWarsSeason;
}

/** Полная статистика для MobWars */
export interface IMobWarsGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Мобов убито */
  mobsKilled: number;
  /** Мобов отправлено */
  mobsSended: number;
  /** Максимальный доход */
  maxIncome: number;
}

/** Сезонная статистика для MobWars */
export interface IMobWarsSeason {
  /** Статистика за текущий месяц */
  monthly: Omit<IMobWarsGlobal, "maxIncome">;
}

/** Возможные блоки для Prison */
interface blocks {
  [key: string]: number;
}

/** Статистика для Prison */
export interface IPrison {
  /** Полная статистика */
  global: IPrisonGlobal;
  /** Сезонная статистика */
  season: IPrisonSeason;
}

/** Полная статистика для Prison */
export interface IPrisonGlobal {
  /** Всего блоков */
  total_blocks: number;
  /** Заработано денег */
  earned_money: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Убито мобов */
  mobs: number;
  /** Блоки */
  blocks: blocks;
}

/** Сезонная статистика для Prison */
export interface IPrisonSeason {
  manual: IPrisonGlobal;
}

/** Статистика по SkyWars */
export interface ISkyWars {
  /** Полная статистика */
  global: ISkyWarsGlobal;
  /** Сезонная статистика */
  season: ISkyWarsSeason;
}

/** Полная статистика по SkyWars */
export interface ISkyWarsGlobal {
  /** Побед */
  wins: number;
  /** Игр сыграно */
  games: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Выстрелов из лука */
  arrowsFired: number;
  /** Сломано блоков */
  blocksBroken: number;
  /** Поставлено блоков */
  blocksPlaced: number;
  /** Текущая серия побед */
  currentWinStreak: number;
  /** Максимально длинная серия побед */
  winStreak: number;
}

/** Сезонная статистика по SkyWars */
export interface ISkyWarsSeason {
  /** Статистика за текущий месяц */
  monthly: Omit<ISkyWarsGlobal, "currentWinStreak" | "winStreak">;
}

/** Статистика для Arcade */
export interface IArcade {
  /** Полная статистика */
  global: IArcadeGlobal;
  /** Сезонная статистика */
  season: IArcadeSeason;
}

/** Полная статистика для Arcade */
export interface IArcadeGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
}

/** Сезонная статистика для Arcade */
export interface IArcadeSeason {
  /** Статистика за текущий месяцы */
  monthly: IArcadeGlobal;
}

/** Статистика для The Bridge */
export interface IBridge {
  /** Полная статистика */
  global: IBridgeGlobal;
}

/** Полная статистика для The Bridge */
export interface IBridgeGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Набрано очков */
  points: number;
}

/** Статистика для JumpLeague */
export interface IJumpLeague {
  /** Полная статистика */
  global: IJumpLeagueGlobal;
}

/** Полная статистика для JumpLeague */
export interface IJumpLeagueGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Чекпоинтов */
  checkpoints: number;
}

/** Статистика для Murder Mystery */
export interface IMurder {
  /** Полная статистика */
  global: IMurderGlobal;
}
/** Полная статистика для Murder Mystery */
export interface IMurderGlobal {
  /** Игр сыграно */
  games: number;
  /** Всего побед */
  total_wins: number;
  /** Побед за невиновного */
  wins_as_innocent: number;
  /** Побед за маньяка */
  wins_as_maniac: number;
  /** Побед за детектива */
  wins_as_detective: number;
  /** Убийств */
  kills: number;
}

/** Статистика для Paintball */
export interface IPaintball {
  /** Полная статистика */
  global: IPaintballGlobal;
}

/** Полная статистика для Paintball */
export interface IPaintballGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
}

/** Статистика для Sheep Wars */
export interface ISheep {
  /** Полная статистика */
  global: ISheepGlobal;
}

/** Полная статистика для Sheep Wars */
export interface ISheepGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
}

/** Статистика для TurfWars */
export interface ITurfWars {
  /** Полная статистика */
  global: ITurfWarsGlobal;
}

/** Полная статистика для TurfWars */
export interface ITurfWarsGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
}

/** Статистика для Spleef
 *
 * Этой мини-игры больше не существует
 */
export interface ISpleef {
  /** Полная статистика */
  global: ISpleefGlobal;
}

/** Полная статистика для Spleef */
export interface ISpleefGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Уничтожено блоков */
  broken_blocks: number;
}

/** Статистика для TNT Tag */
export interface ITntTag {
  /** Полная статистика */
  global: ITntTagGlobal;
}

/** Полная статистика для TNT Tag */
export interface ITntTagGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
}

/** Статистика для TNT Run */
export interface ITntRun {
  /** Полная статистика */
  global: ITntRunGlobal;
}

/** Полная статистика для TNT Run */
export interface ITntRunGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Уничтожено блоков */
  broken_blocks: number;
}

/** Статистика для LuckyWars */
export interface ILuckyWars {
  /** Полная статистика */
  global: ILuckyWarsGlobal;
}

/** Полная статистика для LuckyWars */
export interface ILuckyWarsGlobal {
  /** Игр сыграно */
  games: number;
  /** Побед */
  wins: number;
  /** Убийств */
  kills: number;
  /** Смертей */
  deaths: number;
  /** Сломано лаки блоков */
  lucky_blocks: number;
}

/** Модель для `/user/:id/stats` */
export interface IUserStatsGroup {
  /** Annihilation */
  ANN: IAnnihilation;
  /** BuildBattle */
  BB: IBuildBattle;
  /** BlockParty */
  BP: IBlockParty;
  /** BedWars */
  BW: IBedWars;
  /** ClashPoint */
  CP: IClashPoint;
  /** DeathRun */
  DR: IDeathRun;
  /** Duels */
  DUELS: IDuels;
  /** GunGame */
  GG: IGunGame;
  /** HungerGames */
  HG: IHungerGames;
  /** KitPVP */
  KPVP: IKitPvp;
  /** MobWars */
  MW: IMobWars;
  /** Prison */
  PRISON: IPrison;
  /** SkyWars */
  SW: ISkyWars;
  /** Arcade */
  ARC: IArcade;
  /** The Bridge */
  BRIDGE: IBridge;
  /** JumpLeague */
  JUMPLEAGUE: IJumpLeague;
  /** Murder Mystery */
  MURDER: IMurder;
  /** Paintball */
  PAINTBALL: IPaintball;
  /** SheepWars */
  SHEEP: ISheep;
  /** TurfWars */
  TURFWARS: ITurfWars;
  /** Spleef */
  SPLEEF: ISpleef;
  /** TNT Tag */
  TNTTAG: ITntTag;
  /** TNT Run */
  TNTRUN: ITntRun;
  /** LuckyWars */
  LUCKYWARS: ILuckyWars;
}
