# vime-types

Библиотека типов данных для работы с API VimeWorld.

Автор: [@runic-tears](https://github.com/runic-tears)

Репозиторий: [@runic-tears/vime-types](https://github.com/runic-tears/vime-types)

Лицензия: MIT

## Установка

Чтобы установить библиотеку, используйте эту команду:

```
npm install vime-types
```

Не забывайте периодически обновлять загруженный модуль!

## Микрогайд

Используя данную библиотеку, вы должны понимать структуру модуля. Снизу вы можете увидеть наглядное древо файлов:

```
models/
    User
    Guild
    Online
    Stats
    Match (в процессе создания)
    Leaderboard

LICENSE
package-lock.json
package.json
```

Каждый из модулей репрезентует эндпоинты в API VimeWorld'a, `User` - для эндпоинтов вида `https://api.vimeworld.ru/user/...`.

Таким образом, если вам нужно получить информацию о пользователе, то вам нужно импортировать интерфейсы из `vime-types/models/user`.

## Кастомные интерфейсы для личного проекта

В TypeScript существуют ютильки, которые помогут вам создать свои собственные интерфейсы/классы/типы.

## Использование

Простой пример использования библиотеки:

```typescript
import { IUserStatsRaw } from "vime-types/models/User";
import fetch from "node-fetch";

fetch("https://api.vimeworld.ru/user/4123212/stats")
  .then(r => r.json())
  .then((data: IUserStatsRaw) => {
    const { user, stats } = data;

    const message =
      `[${user.rank}] ${user.username} <${user.level} LVL>` +
      `\n` +
      `Дата последнего входа: ${user.lastSeen} (UNIX)` +
      `\n\n` +
      `Убийств в SkyWars: ${stats.SW.global.kills}`;

    console.log(message);
  });
```

Вывод:

```
[IMMORTAL] Defracted <31 LVL>
Дата последнего входа: 1581600708 (UNIX)

Убийств в SkyWars: 956
```
