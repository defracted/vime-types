/****************************************
 ****         MIT License            ****
 ****                                ****
 **** Copyright (c) 2020 runic-tears ****
 ****************************************/

import { IUserStatsGroup } from "./Stats";
import { LeaderboardTypes, LeaderboardSorts } from "./Leaderboard";

declare namespace User {
  /** Возможные ранги */
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

  /** Возможные цвета */
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

  /** Коды режимов, попадающихся в информации о матчах */
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

  /** Информация о гильдии, в которой состоит или не состоит пользователь */
  export interface IUserGuild {
    /** ID гильдии */
    id: number;
    /** Название гильдии */
    name: string;
    /** Тэг гильдии
     *
     * Если не существует - `null`
     */
    tag: string | null;
    /** Цвет тэга */
    color: MinecraftColorcodes;
    /** Уровень гильдии */
    level: number;
    /** Прогресс получаемого уровня
     *
     * Возвращает значение от 0 до 1 (число с плавающей точкой)
     */
    levelPercentage: number;
    /** Ссылка на аватарку гильдии
     *
     * Если не существует - `null`
     */
    avatar_url: string | null;
  }

  /** Информация о пользователе */
  export interface IUser {
    /** ID пользователя */
    id: number;
    /** Никнейм пользователя */
    username: string;
    /** Текущий уровень пользователя */
    level: number;
    /** Прогресс получаемого уровня
     *
     * Возвращает значение от 0 до 1 (число с плавающей точкой)
     */
    levelPercentage: number;
    /** Ранк пользователя */
    rank: UserRank;
    /** Наигранное время в секундах */
    playedSeconds: number;
    /** Время последнего входа на сервер (UNIX Timestamp) */
    lastSeen: number;
    /** Гильдия, в которой состоит пользователь
     *
     * Если не состоит ни в одной гильдии - `null`
     */
    guild: IUserGuild | null;
  }

  /** Тип данных для `/user/:id/friends` */
  export interface IUserFriendsRaw {
    /** Доступ к модели пользователя */
    user: IUser;
    /** Друзья пользователя */
    friends: IUser[];
  }

  /** Информация о сессии пользователя */
  export interface IUserSession {
    /** Логическая переменная, отражающая статус пользователя
     *
     * `true` - на сервере
     *
     * `false` - оффлайн
     */
    value: boolean;
    /** Кастомное сообщение, указывающее в какой мини-игре находится пользователь */
    message: string;
    /** Код мини-игры, в которую играет пользователь
     *
     * Свойство может отсутствовать
     */
    game?: string;
  }

  /** Тип данных для `/user/:id/session` */
  export interface IUserSessionRaw extends IUser {
    /** Объект информации о статусе пользователя */
    online: IUserSession;
  }

  /** Тип данных для `/user/:id/stats` */
  export interface IUserStatsRaw {
    /** Доступ к модели пользователя */
    user: IUser;
    /** Объект статистики пользователя */
    stats: IUserStatsGroup;
  }

  /** Ачивка */
  export interface IUserAchievement {
    /** ID ачивки */
    id: number;
    /** Метка времени, когда было получено достижение (UNIX Timestamp) */
    time: number;
  }

  /** Тип данных для `/user/:id/achievements` */
  export interface IUserAchievements {
    user: IUser;
    /** Массив полученных ачивок */
    achievements: IUserAchievement[];
  }

  /** Краткая информация о таблице лидерства, в которой находится пользователь */
  export interface IUserLeaderboards {
    type: LeaderboardTypes;
    sort: LeaderboardSorts;
    /** Текущее место в топе */
    place: number;
  }

  /** Тип данных для `/user/:id/leaderboards` */
  export interface IUserLeaderboardsRaw {
    user: IUser;
    leaderboards: IUserLeaderboards[];
  }

  /** Модель карты для информации последних матчах пользователя */
  export interface IUserMatchMapInfo {
    /** ID карты
     *
     * Это строчка, это не баг.
     */
    id: string;
    /** Название карты */
    name: string;
    /** Количество команд */
    teams: number;
    /** Количество игроков в каждой команде */
    playersInTeam: number;
  }

  /** Матч, сыгранный пользователем */
  export interface IUserMatch {
    /** ID матча
     *
     * Строка. Не баг.
     */
    id: string;
    /** Кодовое название мини-игры */
    game: MatchGameCodes;
    /** Информация о карте
     *
     * Если не существует - `null`
     */
    map: IUserMatchMapInfo | null;
    /** Временная метка матча (UNIX Timestamp)  */
    date: number;
    /** Продолжительность матча */
    duration: number;
    /** Количество игроков в матче */
    players: number;
    /** Логическая переменная, указывающая, победил ли пользователь */
    win: boolean;
    /** Результат игры: `0` - поражение, `1` - победа, `2` - ничья */
    state: 0 | 1 | 2;
  }

  /** Тип данных для `/user/:id/matches` */
  export interface IUserMatchesRaw {
    user: IUser;
    /** Информация о запросе */
    request: {
      /** Количество записей, которые вернет сервер.
       *
       * По умолчанию - `20`, максимально - `50` */
      count: number;
      /** Количество пропущенных от начала записей
       *
       * По умолчанию - `0`, максимально - `2000`.
       */
      offset: number;
      /** Размер массива матчей */
      size: number;
    };
    /** Массив матчей пользователя */
    matches: IUserMatch[];
  }
}

export = User;
