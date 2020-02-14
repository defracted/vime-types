import { IUserGuild, IUser } from "./User";

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
  /** Объект пользователя */
  user: IUser;
  /** Ранг участника гильдии */
  status: GuildRanks;
  /** Дата входа в гильдию (UNIX Timestamp) */
  joined: number;
  /** Вложено коинов в гильдию */
  guildCoins: number;
  /** Заработано опыта для гильдия */
  guildExp: number;
}

/** Тип базовой информации о гильдиях */
export type IGuildSimple = IUserGuild;

/** Типы полной информации о гильдиях */
export interface IGuildFull extends IGuildSimple {
  /** Сумма вложенных в гильдию коинов за все время её существования */
  totalCoins: number;
  /** Дата создания гильдии (UNIX Timestamp) */
  created: number;
  /** Описание гильдии, добавленное основателем */
  web_info: string | null;
  /** перки гильдии */
  perks: IGuildPerks;
  /** Массив участников гильдии */
  members: IGuildMember[];
}
