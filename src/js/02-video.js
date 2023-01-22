import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const getVideoCurrentTime = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

player.setCurrentTime(getVideoCurrentTime() || 0);
const onSaveTimeUpdate = ({ seconds }) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, seconds);

player.on('timeupdate', throttle(onSaveTimeUpdate, 1500));