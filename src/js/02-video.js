import Player from '@vimeo/player';
import {throttle} from "lodash";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let lokalKey = "videoplyer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem(lokalKey, event.seconds);
    console.log(event.seconds);
};

getCurrentTime();

function getCurrentTime() {
    let currentTime = localStorage.getItem(lokalKey);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
};