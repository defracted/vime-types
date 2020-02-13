/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

import { IUser, IUserMatch } from "./User";
import { IGuildSimple } from "./Guild";
import {
  IAnnihilationGlobal,
  IBuildBattleGlobal,
  IBlockPartyGlobal,
  IBedWarsGlobal,
  IClashPointGlobal,
  IDeathRunGlobal,
  IDuelsGlobal,
  IGunGameGlobal,
  IHungerGamesGlobal,
  IKitPvpGlobal,
  IMobWarsGlobal,
  IPrisonGlobal,
  ISkyWarsGlobal,
  IArcadeGlobal,
  IBridgeGlobal,
  IJumpLeagueGlobal,
  IMurderGlobal,
  IPaintballGlobal,
  ISheepGlobal,
  ISpleefGlobal,
  ITntRunGlobal,
  ITntTag,
  ITntTagGlobal,
  ITurfWarsGlobal,
} from "./Stats";

declare namespace Leaderboard {
  /** Типы таблиц лидеров */
  export type LeaderboardTypes =
    | "user"
    | "guild"
    | "ann"
    | "ann_monthly"
    | "bb"
    | "bb_monthly"
    | "bp"
    | "bp_monthly"
    | "bw"
    | "bw_monthly"
    | "cp"
    | "cp_monthly"
    | "dr"
    | "dr_monthly"
    | "duels"
    | "duels_monthly"
    | "gg"
    | "gg_monthly"
    | "hg"
    | "hg_monthly"
    | "kpvp"
    | "kpvp_monthly"
    | "mw"
    | "mw_monthly"
    | "prison"
    | "prison_season"
    | "sw"
    | "sw_monthly"
    | "arc"
    | "arc_monthly"
    | "bridge"
    | "jumpleague"
    | "murder"
    | "paintball"
    | "sheep"
    | "spleef"
    | "tntrun"
    | "tnttag"
    | "turfwars";

  /** Методы сортировки таблиц лидеров */
  export type LeaderboardSorts =
    | "level"
    | "online"
    | "total_coins"
    | "kills"
    | "wins"
    | "rate"
    | "points"
    | "bedBreaked"
    | "total_wins"
    | "total_games"
    | "total_blocks"
    | "earned_money"
    | "wins_as_maniac"
    | "tamed_sheep";

  /** Допустимые типы сезонов таблиц лидеров  */
  export type LeaderboardSeasons = "monthly" | "manual";

  /** Информация о таблице */
  export interface ILeaderboardInfo {
    /** Тип таблицы */
    type: LeaderboardTypes;
    /** Метод сортировки */
    sort: LeaderboardSorts;
    /** Сезон
     *
     * Может отсутствовать
     */
    season?: LeaderboardSeasons;
    /** Количество пропущенных от начала записей */
    offset: number;
    /** Количество записей */
    size: number;
    max_size: number;
  }

  /** Типы для `/leaderboard/get/user` */
  export interface ILeaderboardUser {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: IUser[];
  }

  /** Типы для `/leaderboard/get/guild` */
  export interface ILeaderboardGuild {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив гильдий, находящихся в таблице лидеров */
    records: IGuildSimple[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Annihilation */
  export interface ILeaderboardAnnihilationUser extends IAnnihilationGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/ann` и `/leaderboard/get/ann_monthly` */
  export interface ILeaderboardAnnihilation {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardAnnihilationUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы BuildBattle */
  export interface ILeaderboardBuildBattleUser extends IBuildBattleGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/bb` и `/leaderboard/get/bb_monthly` */
  export interface ILeaderboardBuildBattle {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardBuildBattleUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы BlockParty */
  export interface ILeaderboardBlockPartyUser extends IBlockPartyGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/bp` и `/leaderboard/get/bp_monthly` */
  export interface ILeaderboardBlockParty {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardBlockPartyUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы BedWars */
  export interface ILeaderboardBedWarsUser extends IBedWarsGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/bw` и `/leaderboard/get/bw_monthly` */
  export interface ILeaderboardBedWars {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardBedWarsUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы ClashPoint */
  export interface ILeaderboardClashPointUser extends IClashPointGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/cp` и `/leaderboard/get/cp_monthly` */
  export interface ILeaderboardClashPoint {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardClashPointUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы DeathRun */
  export interface ILeaderboardDeathRunUser extends IDeathRunGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/dr` и `/leaderboard/get/dr_monthly` */
  export interface ILeaderboardDeathRun {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardDeathRunUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Duels */
  export interface ILeaderboardDuelsUser extends IDuelsGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/duels` и `/leaderboard/get/duels_monthly` */
  export interface ILeaderboardDuels {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardDuelsUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы GunGame */
  export interface ILeaderboardGunGameUser extends IGunGameGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/gg` и `/leaderboard/get/gg_monthly` */
  export interface ILeaderboardGunGame {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardGunGameUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы HungerGames */
  export interface ILeaderboardHungerGamesUser extends IHungerGamesGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/hg` и `/leaderboard/get/hg_monthly` */
  export interface ILeaderboardHungerGames {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardHungerGamesUser[];
  }

  /**
   * Тип возвращаемой информации о пользователе из таблицы KitPVP
   *
   * При запросе информации за текущий месяц, свойство `points` может отсутствовать
   */
  export interface ILeaderboardKitPVPUser extends Omit<IKitPvpGlobal, "points"> {
    user: IUser;
    points?: number;
  }

  /** Типы для `/leaderboard/get/kpvp` и `/leaderboard/get/kpvp_monthly` */
  export interface ILeaderboardKitPVP {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardKitPVPUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы MobWars */
  export interface ILeaderboardMobWarsUser extends Omit<IMobWarsGlobal, "maxIncome"> {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/mw` и `/leaderboard/get/mw_monthly` */
  export interface ILeaderboardMobWars {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardMobWarsUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Prison */
  export interface ILeaderboardPrisonUser extends Omit<IPrisonGlobal, "blocks"> {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/prison` */
  export interface ILeaderboardPrison {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardPrisonUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы SkyWars */
  export interface ILeaderboardSkyWarsUser
    extends Omit<ISkyWarsGlobal, "winStreak" | "currentWinStreak"> {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/sw` и `/leaderboard/get/sw_monthly` */
  export interface ILeaderboardSkyWars {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardSkyWarsUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Arcade */
  export interface ILeaderboardArcadeUser extends IArcadeGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/arc` и `/leaderboard/get/arc_monthly` */
  export interface ILeaderboardArcade {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardArcadeUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Bridge */
  export interface ILeaderboardBridgeUser extends IBridgeGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/bridge` */
  export interface ILeaderboardBridge {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardBridgeUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы JumpLeague */
  export interface ILeaderboardJumpLeagueUser extends IJumpLeagueGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/jumpleague` */
  export interface ILeaderboardJumpLeague {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardJumpLeagueUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Murder */
  export interface ILeaderboardMurderUser extends IMurderGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/murder` */
  export interface ILeaderboardMurder {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardMurderUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Paintball */
  export interface ILeaderboardPaintballUser extends IPaintballGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/paintball` */
  export interface ILeaderboardPaintball {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardPaintballUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы SheepWars */
  export interface ILeaderboardSheepUser extends ISheepGlobal {
    user: IUser;
    /** Количество сворованных овец */
    tamed_sheep: number;
  }

  /** Типы для `/leaderboard/get/sheep` */
  export interface ILeaderboardSheep {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardSheepUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы Spleef */
  export interface ILeaderboardSpleefUser extends ISpleefGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/spleef` */
  export interface ILeaderboardSpleef {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardSpleefUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы TNT Run */
  export interface ILeaderboardTntRunUser extends ITntRunGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/tntrun` */
  export interface ILeaderboardTntRun {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardTntRunUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы TNT Tag */
  export interface ILeaderboardTntTagUser extends ITntTagGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/tnttag` */
  export interface ILeaderboardTntTag {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardTntTagUser[];
  }

  /** Тип возвращаемой информации о пользователе из таблицы TurfWars */
  export interface ILeaderboardTurfWarsUser extends ITurfWarsGlobal {
    user: IUser;
  }

  /** Типы для `/leaderboard/get/turfwars` */
  export interface ILeaderboardTurfWars {
    /** Информация о таблице */
    leaderboard: ILeaderboardInfo;
    /** Массив пользователей, находящихся в таблице лидеров */
    records: ILeaderboardTurfWarsUser[];
  }
}

export = Leaderboard;
