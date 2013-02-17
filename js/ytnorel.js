movie_player.addEventListener("onStateChange", "onytplayerStateChange");

function onytplayerStateChange(newState) {
  if(newState == 0) {
    movie_player.seekTo(0, true);
  }
}
