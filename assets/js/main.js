// Our program will be a crypto coins converter in USD and $ Argentinians.
// The first idea is to show the user the coins we work with, and the user must select one and then the calculator will do the convertion
// The second idea is create an algorithm to give user predictions about the money and future wins
// I will add gas fees, and some other stuffs in order to do everything correctly




// ---------------------------- VARIABLES ---------------------------- 
alert("Our coins are: Bitcoin - Etherum - Solana - Uniswap - Sandbox");
let coin = prompt("Please select your coin");
console.log(coin);
let bitCoin = 49760;
let etherumCoin = 3760;
let solanaCoin = 195;
let uniswapCoin = 17.55;
let sandboxCoin = 6.09;
let dolarValue = 204;


// ---------------------------- FUNCTIONS ---------------------------- 
// Adding gas fee function
// JIC: gas fee will be 6% of the coin amount. Doesn't matter which coin. 
const gasfeeCalculator = (x) => {
    let gasfee = ((6*x)/100);
    return gasfee.toFixed(8); //Natoshi Sakamota
}; 

// Value in dollars validator
// You cannot add less than 20 dollars.  
const coinDollarsValidator = (e) =>{
    while (e <= 19) {
        alert("You need at least $20 of investment. Please, try again.");  
        e = parseInt(prompt(`Add value in dollars to buy ${coin}`));
    };
};

// Adding cryptos calculator
const bitCoinCalculator  = () => {
    if (coin === "Bitcoin") {
        // Asking amount in dollars for investment
        let coinQuantity = parseInt(prompt(`Add value in dollars to buy ${coin}`));
        // Dollars validator
        coinDollarsValidator(coinQuantity);
        // Converting investment in criptos value
        let bitCoinAmmount = coinQuantity / bitCoin;
        // Adding Natoshi Sakamota 
        let natoshiSaka = bitCoinAmmount.toFixed(8);
        // Adding gas fee
        gasfeeCalculator(natoshiSaka);
        // Final cripto value [converted with validators and gas fees]
        let finalPrice = natoshiSaka - gasfeeCalculator(natoshiSaka);
        alert(`Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`); 
    };
};
const etherumCalculator = () => {
    if (coin === "Etherum") {
        // Asking amount in dollars for investment
        let coinQuantity = parseInt(prompt(`Add value in dollars to buy ${coin}`));
        // Dollars validator
        coinDollarsValidator(coinQuantity);
        // Converting investment in criptos value
        let ethCoinAmmount = coinQuantity / etherumCoin;
        // Adding Natoshi Sakamota 
        let natoshiSaka = ethCoinAmmount.toFixed(8);
        //Adding gas fee
        gasfeeCalculator(natoshiSaka);
        // Final cripto value [converted with validators and gas fees]
        let finalPrice = natoshiSaka - gasfeeCalculator(natoshiSaka);
        alert(`Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`); 
    };
};
const solanaCalculator = () => {
    if (coin === "Solana") {
        // Variables
        let coinQuantity = parseInt(prompt(`Add value in dollars to buy ${coin}`));
        // Dollars validator
        coinDollarsValidator(coinQuantity);
        // Converting investment in criptos value
        let solCoinAmmount = coinQuantity / solanaCoin;
        // Adding Natoshi Sakamota 
        let natoshiSaka = solCoinAmmount.toFixed(8);
        //Adding gas fee
        gasfeeCalculator(natoshiSaka);
        // Final cripto value [converted with validators and gas fees]
        let finalPrice = natoshiSaka - gasfeeCalculator(natoshiSaka);
        alert(`Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`); 
    };
};
const uniCalculator = () => {
    if (coin === "Uniswap") {
        // Variables
        let coinQuantity = parseInt(prompt(`Add value in dollars to buy ${coin}`));
        // Dollars validator
        coinDollarsValidator(coinQuantity);
        // Converting investment in criptos value
        let uniCoinAmmount = coinQuantity / uniswapCoin;
        // Adding Natoshi Sakamota 
        let natoshiSaka = uniCoinAmmount.toFixed(8);
        //Adding gas fee
        gasfeeCalculator(natoshiSaka);
        // Final cripto value [converted with validators and gas fees]
        let finalPrice = natoshiSaka - gasfeeCalculator(natoshiSaka);
        alert(`Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`); 
    };
};
const sandboxCalculator = () => {
    if (coin === "Sandbox") {
        // Variables
        let coinQuantity = parseInt(prompt(`Add value in dollars to buy ${coin}`));
        // Dollars validator
        coinDollarsValidator(coinQuantity);
        // Converting investment in criptos value
        let sandboxCoinAmmount = coinQuantity / sandboxCoin;
        // Adding Natoshi Sakamota 
        let natoshiSaka = sandboxCoinAmmount.toFixed(8);
        //Adding gas fee
        gasfeeCalculator(natoshiSaka);
        // Final cripto value [converted with validators and gas fees]
        let finalPrice = natoshiSaka - gasfeeCalculator(natoshiSaka);
        alert(`Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`); 
    };
};


// Coins Validator ---> True or False
const coinValidator = () =>  {
    let checkValidator = prompt(`You've selected ${coin}. Do you wish to continue? Yes - No`);
    if (checkValidator === "Yes"){
        bitCoinCalculator();
        etherumCalculator();
        solanaCalculator();
        uniCalculator();
        sandboxCalculator();
    } else {
        alert("You didn't want to continue. Please try again");
    };
};
const coinValidatorFalse = () => {
    if((coin != "Bitcoin" || coin != 'Etherum' || coin != "Solana" || coin != "Uniswap" || coin != "Sandbox")) {
        alert("You didn't select the correct coin. Please, refresh the site and try again.");
    };
};





// ---------------------------- PROGRAM ---------------------------- 
if((coin === "Bitcoin" || coin === 'Etherum' || coin === "Solana" || coin === "Uniswap" || coin === "Sandbox")) {
    coinValidator();
} else {
    coinValidatorFalse();
};
