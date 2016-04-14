movie_player.addEventListener("onStateChange", function onytplayerStateChange(newState) {
  console.log("New State: " + newState);
  if(newState == 0) {
    movie_player.seekTo(0, true);
  }
});
