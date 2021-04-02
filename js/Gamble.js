const gambleButton = document.querySelector('.gamble-button');
const pointDisplayer = document.querySelector('.points');
let balance = 1000;
let input = 0;
let chosenPercentage = 0;
let higherPercentage = 0;
let lowerPercentage = 0;
let profit = 0;
let higher = false;

const updateStorageBalance = function(){
    balance = parseInt(localStorage.getItem("storageBalance"));
    console.log("Balance has been updated using local storage : " + balance);
}
const saveStorageBalance = function(){
    balance = parseInt(localStorage.setItem("storageBalance", balance));
}
const pointDisplayerUpdater = function(){
    pointDisplayer.innerHTML = parseInt(balance);
}

updateStorageBalance();
pointDisplayerUpdater();

gambleButton.addEventListener('click' , function(){
    console.log("Button Click-------")
    if(balance > 0){
        input = prompt("How many coins do you want to put in?");
        balance -= input;
        pointDisplayerUpdater(); 
        console.log("Current balance : " + balance);  
        choosePercentage();
    
        calculateWin();
    }else{
        alert("You don't have enough credits. 100 credits have been added to your balance for a re-try. :)");
        balance =+ 100;
        pointDisplayerUpdater();
    }
})

const choosePercentage = function(){  
    console.log("choosePercentage-------")
    chosenPercentage = prompt("What percentage to win?");
    if (chosenPercentage >= 95){
        alert("You have to choose a percentage under 95.");
        chosenPercentage = prompt("What percentage to win?");
    }
    console.log("Chosen Percentage : " + chosenPercentage);
    higher = confirm("Do you want to play higher or lower? Press cancel for lower.")
    if (higher){
        higherPercentage = 100 - chosenPercentage;
        console.log("You chose higher, these are your percentages : " + higherPercentage + "% - 100%");
    }else{
        console.log("You chose lower, these are your percentages : " + "0% - " + chosenPercentage + "%");
    }
}

const calculateProfit = function(){
    console.log("calculateProfit-------")
    let stakes = 100 / chosenPercentage;
    console.log("stakes: " + stakes);
    profit = input * stakes;
    console.log("profit: " + profit);
    return profit;
}

const calculateWin = function(){
    console.log("calculateWin-------")
    let randomNumber = Math.floor(Math.random() * 101); 

    console.log("Random number : " + randomNumber);
    if(!higher){
        if (chosenPercentage > randomNumber){
            win();
        }else{
            alert("You have lost.")
            pointDisplayerUpdater();
            saveStorageBalance();
        }
    }else{
        if (higherPercentage < randomNumber){
            win();
        }else{
            alert("You have lost.")
            pointDisplayerUpdater();
            saveStorageBalance();
        }
    }
}

const win = function(){
    console.log("win-------")
    console.log("Old balance: " + balance);
    balance += calculateProfit();
    console.log("Current balance : " + balance);
    pointDisplayerUpdater();
    saveStorageBalance();
}

