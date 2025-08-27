let player1Time = 108;
let Player2Time = 111;

//cmd+d ctrl+d
function getFastest() {
  if (player1Time < Player2Time) {
    return player1Time;
  } else if (Player2Time < player1Time) {
    return Player2Time;
  } else {
    return player1Time;
  }
}

// let fastestRace = getFastest();
// console.log(fastestRace);

function getTotalRace() {
  return player1Time + Player2Time;
}
let totalRace = getTotalRace();
console.log(totalRace);
