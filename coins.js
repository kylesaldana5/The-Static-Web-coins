
// define the coin variables 
let quarters = 25;   
let dimes = 10;
let nickles = 05;
let pennies = 01;

// define the varialbe that will be divided into coins

let money = 3.94;

// define a variable that will hold the remainder or money once operations are done

let remainder ;

// Initialize a JavaScript object to hold the coins
var coinPurse = {};


// creat a function that will do the operations for coins into money 

function coinCounter(moneyHolder) {

    moneyHolder = moneyHolder * 100
    coinPurse.quarters = Math.floor(moneyHolder/quarters)
    remainder = moneyHolder % quarters
    coinPurse.dimes = Math.floor(remainder/dimes)
    remainder = remainder %  dimes
    coinPurse.nickles = Math.floor(remainder/nickles)
    remainder = remainder % nickles
    coinPurse.pennies = Math.floor(remainder/pennies)
    
    return coinPurse;
}

var coins = coinCounter(money)
console.log(coins)

