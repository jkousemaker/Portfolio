const gambleButton = document.querySelector('.glow-on-hover');
const pointDisplayer = document.querySelector('.points');
const percentageSlider = document.getElementById("customRange2");
let higherSelector = document.getElementById("higher").checked;
let lowerSelector = document.getElementById("lower").checked;
const winnerImage = document.getElementById("winner");

let sliderOutput = document.getElementById("slider-pointer");

let balance = 1000;
let input = 0;
let hLower = 0;
let chosenPercentage = 0;
let higherPercentage = 0;
let lowerPercentage = 0;
let profit = 0;
let winner = true;

console.log("higher : " + higherSelector);
console.log("lower : " + lowerSelector);

/*
2. Knoppen mooier maken.
3. Interface overhaul.
4. Animations.
6. radio buttons zelfde style als gamble button geven.
*/

percentageSlider.oninput = function(){
    sliderOutput.outerHTML = percentageSlider.value;
}

const updateStorageBalance = function(){
    balanceStorage = parseInt(localStorage.getItem("storageBalance"));
    console.log("Storage : " + balanceStorage);
    if (balanceStorage != 1000){
    console.log("Balance has been updated using local storage : " + balance);
    balance = balanceStorage;
    }else{
        balane = 1000;
    }
}
const saveStorageBalance = function(){
    localStorage.setItem("storageBalance", 1000)  //Change 1000 to balance!!!!!!!!!!!!!!
}
const pointDisplayerUpdater = function(){
    pointDisplayer.classList.add("fade-out");
    pointDisplayer.classList.remove("fade-out");
    pointDisplayer.innerHTML = parseInt(balance);
    pointDisplayer.classList.remove("fade-in");
    pointDisplayer.classList.remove("fade-in");
    

}

updateStorageBalance();
pointDisplayerUpdater();

gambleButton.addEventListener('click' , function(){
    console.log("Button Click-------")
    higherSelector = document.getElementById("higher").checked;
    lowerSelector = document.getElementById("lower").checked;
    console.log("higher : " + higherSelector);
    console.log("lower : " + lowerSelector);
    input = document.getElementById("coin-input").value
    chosenPercentage = percentageSlider.value;

    if(balance > 0 && input > 0 && input <= balance){
        console.log("Input log: " + input);
        console.log("Input percentage log: " + percentageSlider.value);
        balance -= input;
        pointDisplayerUpdater(); 
        console.log("Current balance : " + balance);  
        // choosePercentage();
        // 
        console.log("Input higher lower: " + hLower);
        
        if (higherSelector){
            higherPercentage = 100 - chosenPercentage;
            console.log("You chose higher, these are your percentages : " + higherPercentage + "% - 100%");
        }else if(lowerSelector){
            console.log("You chose lower, these are your percentages : " + "0% - " + chosenPercentage + "%");
        }else{
            alert("You have to select if you want to go Higher or Lower!")
        }

        calculateWin();
    }else if(input > 0 && input <= balance){
        alert("You don't have enough credits. 100 credits have been added to your balance for a re-try. :)");
        balance =+ 100;
        pointDisplayerUpdater();
    }else if(input > balance){
        alert("You don't have enough coins to gamble that amount!");
    }else{
        alert("You have to put in the amount of coins that you want to gamble!");
    }
})


/* const choosePercentage = function(){  
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
}*/

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



    if(higher){
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
    winnerImage.classList.add("won");
    setTimeout(winnerImageFade, 1000);
}

function winnerImageFade(){
    winnerImage.classList.remove("won");
}
