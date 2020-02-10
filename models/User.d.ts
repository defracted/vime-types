import { IUserStatsGroup } from "./Stats";
import { LeaderboardTypes, LeaderboardSorts } from "./Leaderboard";

/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

export type UserRank =
  | "PLAYER"
  | "VIP"
  | "PREMIUM"
  | "HOLY"
  | "IMMORTAL"
  | "BUILDER"
  | "MAPLEAD"
  | "YOUTUBE"
  | "DEV"
  | "ORGANIZER"
  | "MODER"
  | "WARDEN"
  | "CHIEF"
  | "ADMIN";

export type MinecraftColorcodes =
  | "&f"
  | "&e"
  | "&d"
  | "&c"
  | "&b"
  | "&a"
  | "&9"
  | "&8"
  | "&7"
  | "&6"
  | "&5"
  | "&4"
  | "&3"
  | "&2"
  | "&1"
  | "&0";

export type MatchGameCodes =
  | "ANN"
  | "BB"
  | "BP"
  | "MW"
  | "CP"
  | "SW"
  | "SWT"
  | "BW"
  | "BWQ"
  | "BWH"
  | "DUELS"
  | "TNTRUN"
  | "TNTTAG"
  | "PAINTBALL"
  | "SHEEP"
  | "JUMPLEAGUE"
  | "BRIDGE"
  | "MURDER"
  | "LUCKYWARS";

// User

export interface IUserGuild {
  id: number;
  name: string;
  tag: string | null;
  color: MinecraftColorcodes;
  level: number;
  levelPercentage: number;
  avatar_url: string | null;
}

export interface IUser {
  id: number;
  username: string;
  level: number;
  levelPercentage: number;
  rank: UserRank;
  playedSeconds: number;
  lastSeen: number;
  guild: IUserGuild | null;
}

// Friends

export interface IUserFriendsRaw {
  user: IUser;
  friends: IUser[];
}

// Session

export interface IUserSession {
  value: boolean;
  message: string;
  game?: string;
}

export interface IUserSessionRaw extends IUser {
  online: IUserSession;
}

// Stats

export interface IUserStatsRaw {
  user: IUser;
  stats: IUserStatsGroup;
}

// TODO: Achievements

// Leaderboards

export interface IUserLeaderboards {
  type: LeaderboardTypes;
  sort: LeaderboardSorts;
  place: number;
}

export interface IUserLeaderboardsRaw {
  user: IUser;
  leaderboards: IUserLeaderboards[];
}

// Map

export interface IUserMatchMapInfo {
  id: string;
  name: string;
  teams: number;
  playersInTeam: number;
}

// Matches

export interface IUserMatch {
  id: string;
  game: MatchGameCodes;
  map: IUserMatchMapInfo | null;
  date: number;
  duration: number;
  players: number;
  win: boolean;
  state: 0 | 1 | 2;
}

export interface IUserMatchesRaw {
  user: IUser;
  request: {
    count: number;
    offset: number;
    size: number;
  };
  matches: IUserMatch[];
}
