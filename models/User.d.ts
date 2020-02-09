import { IUserStatsGroup } from "./Stats";
import { MinecraftColorcodes, UserRank, MatchGameCodes } from "./PossibleTypes";

/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

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

export interface IUserSessionRaw {
  user: IUser;
  online: IUserSession;
}

// Stats

export interface IUserStatsRaw {
  user: IUser;
  stats: IUserStatsGroup;
}

// TODO: Achievements

// TODO: Leaderboards

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
