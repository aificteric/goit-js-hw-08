//! Importing the Vimeo Player library and the Lodash throttle function
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//! Getting the Vimeo player iframe and create a new player instance
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//* Set a key for the current time in the player
const currentTimeKey = 'videoplayer-current-time';

//* Save the current time to local storage every second using throttle
const saveCurrentTime = throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(currentTimeKey, time);
  });
}, 1000);

//* Restore the video playback from the position
const restoreCurrentTime = () => {
  const currentTime = localStorage.getItem(currentTimeKey);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
};

//* Listen for the 'timeupdate' event and save the current time / restore the saved playback position
player.on('timeupdate', saveCurrentTime);
restoreCurrentTime();
