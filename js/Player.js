export default class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.points = 0;
    this.winCounter = 0;
    this.level = 1;
  }

    //Adds points to the current players.
  addPointsPlayer(reward) {
    this.points += reward;
    console.log("Points: " + this.points); 
    this.winCounter += 1;
  }
  
    //Raises the player level needed for the leaderboard.
  raisePlayerLevel(coins) {
    let total = coins + this.points;
    this.level = total / 10 + 1;

    this.addPointsPlayer(coins);
  }
}
