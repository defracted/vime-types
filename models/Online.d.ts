import { IUser, IUserSession } from "./User";

/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

// Main

export interface IOnline {
  total: number;
  separated: {
    ann: number;
    bb: number;
    bp: number;
    bw: number;
    cp: number;
    dr: number;
    duels: number;
    gg: number;
    hg: number;
    kpvp: number;
    lobby: number;
    mw: number;
    prison: number;
    sw: number;
    murder: number;
    bridge: number;
    jumpleague: number;
    paintball: number;
    turfwars: number;
    sheep: number;
    spleef: number;
    tntrun: number;
    tnttag: number;
    luckywars: number;
  };
}

// Staff

export interface IOnlineModer extends IUser {
  online: IUserSession;
}

// Streams

export interface IStreamData {
  title: string;
  owner: string;
  viewers: number;
  url: string;
  duration: number;
  platform: "YouTube" | "Twitch" | "GoodGame" | any;
  user: IUser;
}

export type IOnlineStreams = IStreamData[];
