import { IUserGuild, IUser } from "./User";

/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

export type GuildRanks = "LEADER" | "OFFICER" | "MEMBER";

export interface IGuildPerks {
  MEMBERS: {
    name: "Количество членов гильдии";
    level: number;
  };
  COINS: {
    name: "Ежедневный лимит коинов";
    level: number;
  };
  PARTY: {
    name: "Создание группы";
    level: number;
  };
  MOTD: {
    name: "Приветственное сообщение";
    level: number;
  };
  COINS_MULT: {
    name: "Дополнительный множитель коинов";
    level: number;
  };
  TAG: {
    name: "Тег гильдии";
    level: number;
  };
  COLOR: {
    name: "Цвет гильдии";
    level: number;
  };
  GUILD_WAR: {
    name: "Гильдийные войны";
    level: number;
  };
}

export interface IGuildMember {
  user: IUser;
  status: GuildRanks;
  joined: number;
  guildCoins: number;
  guildExp: number;
}

export interface IGuildSimple extends IUserGuild {}

export interface IGuildFull extends IUserGuild {
  totalCoins: number;
  created: number;
  web_info: string | null;
  perks: IGuildPerks;
  members: IGuildMember[];
}
