import Player from "./Player.js";

    /*Variables*/

//Initialising variables and array.
const players = [ ]; //Array where the players will be stores
//Stores all elements needed to change lateron.
const fields = document.querySelectorAll('.box');
const resetBoardButton = document.querySelector(".resetboard-btn");
const resetGameButton = document.querySelector(".resetgame-btn");
const p1Name = document.querySelector(".player1Name");
const p1NameLeaderboard = document.querySelector(".playername1");
const p1Symbol = document.querySelector(".player1Symbol");
const p1Balance = document.querySelector(".player1Balance");
const p1Streak = document.querySelector(".player1Streak");
const p1LevelLeaderboard =  document.querySelector(".playerlevel1");
const p2Name = document.querySelector(".player2Name");
const p2NameLeaderboard = document.querySelector(".playername2");
const p2Symbol = document.querySelector(".player2Symbol");
const p2Balance = document.querySelector(".player2Balance");
const p2Streak = document.querySelector(".player2Streak");
const p2LevelLeaderboard = document.querySelector(".playerlevel2");
const buttonsForReset = document.querySelectorAll(".reset");

let currentPlayer = 0; //This is the index of the array of the currentplayer.
let currentReward = 10; //This is the index of the current reward.
let turnCounter= 0; //This is the index which counts how many symbols have been places.

updateRewardIndicator(currentReward);

    /*AddEventListeners*/

//Function which adds Player to the array players.
document.querySelector(".input-btn").addEventListener('click', (e) => {
    let inputName = document.getElementById("pname").value;
    let inputSymbol = document.getElementById("psymbol").value;

    //Checks if the user is trying to add more than 2 players.
    if(players.length < 2 && inputName && inputSymbol){
        //Checks if second player is trying to have the same symbol as the first player.
        if(players.length < 2 || players[0].symbol != inputSymbol) {
            const newPlayer = new Player(inputName, inputSymbol);

            //Adds the new Player to the array players.
            players.push(newPlayer);

            changePlayerTurn();
            InputUpdater();
        } else {
            alert("You can't have the same symbol as player 1!");
        }

    } else {
        alert("too many players");
    }
})

//Function which puts the symbol on the field.
for (let i = 0; i < fields.length; i++){
    fields[i].addEventListener('click', (e) => {
        //Checks if 2 players have been chosen.
        if(players.length == 2){
            addSymbolToField(i);

            //Checks if there's a winner.
            if(checkWinner()){
                resetBoard();
            }

            matchCounter();
            changePlayerTurn();
        } else {
            alert("You need to add more players!");
        }
    })
}

resetBoardButton.addEventListener("click", resetBoard);
resetGameButton.addEventListener("click", resetGame);

    /*Functions*/

//Adds symbol to the fields on the tic-tac-toe board when clicked.
function addSymbolToField(box) {
    let fieldContent = fields[box].textContent;

    //Checks if pressed field already has been chosen.
    if (fieldContent === players[0].symbol || fieldContent === players[1].symbol) {
        alert('This field can not be used');
    } else {
        fields[box].textContent = players[currentPlayer].symbol;
    }
}

//Updates all elements to player's information.
function InputUpdater() {
    //Stores input in fields in variables.
    let inputName = document.querySelector(".input-name").value;
    let inputSymbol = document.querySelector(".input-symbol").value;
    console.log(players.length);
    //Updates all elements to last added player.
    if(players.length == 1) {
        p1Name.textContent = inputName;
        p1NameLeaderboard.textContent = inputName;
        p1Symbol.textContent = inputSymbol;
        p1Balance.textContent = "None";
        p1Streak.textContent = "None";
        p1LevelLeaderboard.textContent = 1;
    } else {
        p2Name.textContent = inputName;
        p2NameLeaderboard.textContent = inputName;
        p2Symbol.textContent = inputSymbol;
        p2Balance.textContent = "None";
        p2Streak.textContent = "None";
        p2LevelLeaderboard.textContent = 1;
    }
}

//Updates the reward indicator to the current reward.
function updateRewardIndicator(reward) {
    if (document.querySelector(".currentReward")) {
        document.querySelector(".currentReward").textContent = reward;
    }
}

function updateIndicators() {
    if(document.querySelector(".player1Streak") && document.querySelector(".player2Streak") && document.querySelector(".player1Balance") && document.querySelector(".player2Balance") && document.querySelector(".playerscore1") && document.querySelector(".playerlevel1") && document.querySelector(".playerscore2") && document.querySelector(".playerlevel2")) {
        //Updates streak and point indicators
        document.querySelector(".player1Streak").textContent = players[0].winCounter;
        document.querySelector(".player2Streak").textContent = players[1].winCounter;
        document.querySelector(".player1Balance").textContent = players[0].points;
        document.querySelector(".player2Balance").textContent = players[1].points;

        //Leaderboard updater.
        if (players[0].level > players[1].level) {
            document.querySelector(".playername1").textContent = players[0].name;
            document.querySelector(".playerscore1").textContent = players[0].points;
            document.querySelector(".playerlevel1").textContent = players[0].level;
            document.querySelector(".playername2").textContent = players[1].name;
            document.querySelector(".playerscore2").textContent = players[1].points;
            document.querySelector(".playerlevel2").textContent = players[1].level;
        } else {
            document.querySelector(".playername1").textContent = players[1].name;
            document.querySelector(".playerscore1").textContent = players[1].points;
            document.querySelector(".playerlevel1").textContent = players[1].level;
            document.querySelector(".playername2").textContent = players[0].name;
            document.querySelector(".playerscore2").textContent = players[0].points;
            document.querySelector(".playerlevel2").textContent = players[0].level;
        }
    }
}

//Changes the variable currentPlayer to keep track of whose turn it is.
function changePlayerTurn() {
    currentPlayer++;
    if(currentPlayer >1) {
        currentPlayer = 0;
    }
}

//Clears the tic-tac-toe board.
function resetBoard() {
    for (let g = 0; g < fields.length; g++){
        fields[g].textContent = "";
    }
}

//Function which runs when Reset Game buttons is clicked.
function resetGame() {
    //Resets and updates all variables.
    currentPlayer = 0;
    turnCounter = 0;
    currentReward = 10;

    //Removes all players from the array.
    for(let i = -1; i < players.length; i++) {
        players.pop();
    }

    //Resets all the player indicators.
    for(let i = 0; i < buttonsForReset.length; i++) {
        buttonsForReset[i].textContent = "None";
    }

    resetBoard();
    updateRewardIndicator(currentReward);
}

//Function which runs when someone has won.
function endOfMatch(playerr, winner) {
    turnCounter = 0;

    alert("Player: " + winner + " won!"); 

    players[playerr].raisePlayerLevel(currentReward);

    //Checks if both players have the same winCounter, the reward of the next game will reset to 10 if so.
    if(players[0].winCounter !== players[1].winCounter){
        currentReward += 10;
    } else {
        currentReward = 10;
    }

    updateRewardIndicator(currentReward);
    updateIndicators();
}

//Counts how many times a symbol is placed on the tic-tac-toe board
function matchCounter() {
    turnCounter++
    if (turnCounter == 9) {
        alert("You've drawn!");
        turnCounter = 0;
        resetBoard();
    }
}

//Checks all possible combinations for a win.
function checkWinner() {
    let winPlayer = currentPlayer + 1;
    
    if(fields[0].textContent == players[currentPlayer].symbol && fields[1].textContent == players[currentPlayer].symbol && fields[2].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[3].textContent == players[currentPlayer].symbol && fields[4].textContent == players[currentPlayer].symbol && fields[5].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[6].textContent == players[currentPlayer].symbol && fields[7].textContent == players[currentPlayer].symbol && fields[8].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[currentPlayer].symbol && fields[3].textContent == players[currentPlayer].symbol && fields[6].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[1].textContent == players[currentPlayer].symbol && fields[4].textContent == players[currentPlayer].symbol && fields[7].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[4].textContent == players[currentPlayer].symbol && fields[5].textContent == players[currentPlayer].symbol && fields[8].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[currentPlayer].symbol && fields[4].textContent == players[currentPlayer].symbol && fields[8].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[currentPlayer].symbol && fields[4].textContent == players[currentPlayer].symbol && fields[6].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[currentPlayer].symbol && fields[5].textContent == players[currentPlayer].symbol && fields[8].textContent == players[currentPlayer].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    
    return false;
}

console.log("js loaded")