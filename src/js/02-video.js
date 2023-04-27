import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTimeKey = 'videoplayer-current-time';

// Оновлюємо локальне сховище з поточним часом відтворення
const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(currentTimeKey, time);
  });
}, 1000);

// Відновлюємо відтворення зі збереженої позиції
const restoreCurrentTime = () => {
  const currentTime = localStorage.getItem(currentTimeKey);

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
};

player.on('timeupdate', saveCurrentTime);

restoreCurrentTime();
