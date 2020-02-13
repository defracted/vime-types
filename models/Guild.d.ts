/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

import { IUserGuild, IUser } from "./User";

declare namespace Guild {
  /** Ранги участника гильдии */
  export type GuildRanks = "LEADER" | "OFFICER" | "MEMBER";

  /** Информация о перках гильдии */
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

  /** Типы участника гильдии */
  export interface IGuildMember {
    user: IUser;
    status: GuildRanks;
    joined: number;
    guildCoins: number;
    guildExp: number;
  }

  /** Тип базовой информации о гильдиях */
  export interface IGuildSimple extends IUserGuild {}

  /** Типы полной информации о гильдиях */
  export interface IGuildFull extends IUserGuild {
    totalCoins: number;
    created: number;
    web_info: string | null;
    perks: IGuildPerks;
    members: IGuildMember[];
  }
}

export = Guild;
