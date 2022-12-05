// HTML містить < iframe > з відео для Vimeo плеєра.Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
// Розбий це завдання на декілька підзавдань:

//     Ознайомся з документацією бібліотеки Vimeo плеєра.
//     Додай бібліотеку як залежність проекту через npm .
//     Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player , але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//     Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//     Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time" .
//     Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//     Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function saveCurrentTime(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

player.on('timeupdate', _.throttle(saveCurrentTime, 1000));
const savedCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(savedCurrentTime ? savedCurrentTime : 0);

// player.on('pause', function (e) {
//   console.log('paused! ', e.seconds);
// });
