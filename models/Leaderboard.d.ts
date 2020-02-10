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

/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

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

export type LeaderboardSeasons = "monthly" | "manual";

// Leaderboard description

export interface ILeaderboardInfo {
  type: LeaderboardTypes;
  sort: LeaderboardSorts;
  season?: LeaderboardSeasons;
  offset: number;
  size: number;
  max_size: number;
}

// User level&online leaderboards

export interface ILeaderboardUser {
  leaderboard: ILeaderboardInfo;
  records: IUser[];
}

// Guild total_coins&level leaderboards

export interface ILeaderboardGuild {
  leaderboard: ILeaderboardInfo;
  records: IGuildSimple[];
}

// Annihilation kills leaderboards

export interface ILeaderboardAnnihilationUser extends IAnnihilationGlobal {
  user: IUser;
}

export interface ILeaderboardAnnihilation {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardAnnihilationUser[];
}

// Buildbattle wins leaderboards

export interface ILeaderboardBuildBattleUser extends IBuildBattleGlobal {
  user: IUser;
}

export interface ILeaderboardBuildBattle {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardBuildBattleUser[];
}

// BlockParty wins leaderboards

export interface ILeaderboardBlockPartyUser extends IBlockPartyGlobal {
  user: IUser;
}

export interface ILeaderboardBlockParty {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardBlockPartyUser[];
}

// BedWars leaderboards

export interface ILeaderboardBedWarsUser extends IBedWarsGlobal {
  user: IUser;
}

export interface ILeaderboardBedWars {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardBedWarsUser[];
}

// ClashPoint leaderboards

export interface ILeaderboardClashPointUser extends IClashPointGlobal {
  user: IUser;
}

export interface ILeaderboardClashPoint {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardClashPointUser[];
}

// DeathRun leaderboards

export interface ILeaderboardDeathRunUser extends IDeathRunGlobal {
  user: IUser;
}

export interface ILeaderboardDeathRun {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardDeathRunUser[];
}

// Duels leaderboards

export interface ILeaderboardDuelsUser extends IDuelsGlobal {
  user: IUser;
}

export interface ILeaderboardDuels {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardDuelsUser[];
}

// GunGame leaderboards

export interface ILeaderboardGunGameUser extends IGunGameGlobal {
  user: IUser;
}

export interface ILeaderboardGunGame {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardGunGameUser[];
}

// HungerGames leaderboards

export interface ILeaderboardHungerGamesUser extends IHungerGamesGlobal {
  user: IUser;
}

export interface ILeaderboardHungerGames {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardHungerGamesUser[];
}

// KitPVP leaderboards

export interface ILeaderboardKitPVPUser extends Omit<IKitPvpGlobal, "points"> {
  user: IUser;
  points?: number;
}

export interface ILeaderboardKitPVP {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardKitPVPUser[];
}

// MobWars leaderboards

export interface ILeaderboardMobWarsUser extends Omit<IMobWarsGlobal, "maxIncome"> {
  user: IUser;
}

export interface ILeaderboardMobWars {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardMobWarsUser[];
}

// Prison leaderboards

export interface ILeaderboardPrisonUser extends Omit<IPrisonGlobal, "blocks"> {
  user: IUser;
}

export interface ILeaderboardPrison {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardPrisonUser[];
}

// SkyWars leaderboards

export interface ILeaderboardSkyWarsUser
  extends Omit<ISkyWarsGlobal, "winStreak" | "currentWinStreak"> {
  user: IUser;
}

export interface ILeaderboardSkyWars {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardSkyWarsUser[];
}

// Arcade leadeboards

export interface ILeaderboardArcadeUser extends IArcadeGlobal {
  user: IUser;
}

export interface ILeaderboardArcade {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardArcadeUser[];
}

// Bridge leaderboards

export interface ILeaderboardBridgeUser extends IBridgeGlobal {
  user: IUser;
}

export interface ILeaderboardBridge {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardBridgeUser[];
}

// JumpLeague leaderboards

export interface ILeaderboardJumpLeagueUser extends IJumpLeagueGlobal {
  user: IUser;
}

export interface ILeaderboardJumpLeague {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardJumpLeagueUser[];
}

// Murder leaderboards

export interface ILeaderboardMurderUser extends IMurderGlobal {
  user: IUser;
}

export interface ILeaderboardMurder {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardMurderUser[];
}

// Paintball leaderboards

export interface ILeaderboardPaintballUser extends IPaintballGlobal {
  user: IUser;
}

export interface ILeaderboardPaintball {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardPaintballUser[];
}

// SheepWars leaderboards

export interface ILeaderboardSheepUser extends ISheepGlobal {
  user: IUser;
  tamed_sheep: number;
}

export interface ILeaderboardSheep {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardSheepUser[];
}

// Spleef leaderboards

export interface ILeaderboardSpleefUser extends ISpleefGlobal {
  user: IUser;
}

export interface ILeaderboardSpleef {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardSpleefUser[];
}

// TNT RUN leaderboards

export interface ILeaderboardTntRunUser extends ITntRunGlobal {
  user: IUser;
}

export interface ILeaderboardTntRun {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardTntRunUser[];
}

// TNT TAG leaderboards

export interface ILeaderboardTntTagUser extends ITntTagGlobal {
  user: IUser;
}

export interface ILeaderboardTntTag {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardTntTagUser[];
}

// TurfWars leaderboards

export interface ILeaderboardTurfWarsUser extends ITurfWarsGlobal {
  user: IUser;
}

export interface ILeaderboardTurfWars {
  leaderboard: ILeaderboardInfo;
  records: ILeaderboardTurfWarsUser[];
}
