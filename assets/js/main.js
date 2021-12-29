// Our program will be a crypto coins converter in USD and $ Argentinians.
// The first idea is to show the user the coins we work with, and the user must select one and then the calculator will do the convertion
// The second idea is create an algotim to give user predictions about the money and future wins
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
const bitCoinCalculator  = () => {
    if (coin==="Bitcoin") {
        let coinQuantity = parseInt(prompt(`Add value in dolars to buy ${coin}`));
        let bitCoinAmmount = coinQuantity / bitCoin;
        //Add gas fee
        alert(`You will receive ${bitCoinAmmount} coins`); 
    };
};
const etherumCalculator = () => {
    if (coin==="Etherum") {
        let coinQuantity = parseInt(prompt(`Add value in dolars to buy ${coin}`));
        let ethCoinAmmount = coinQuantity / etherumCoin;
        //Add gas fee
        alert(`You will receive ${ethCoinAmmount} coins`); 
    };
};
const solanaCalculator = () => {
    if (coin==="Solana") {
        let coinQuantity = parseInt(prompt(`Add value in dolars to buy ${coin}`));
        let solCoinAmmount = coinQuantity / solanaCoin;
        //Add gas fee
        alert(`You will receive ${solCoinAmmount} coins`); 
    };
};
const uniCalculator = () => {
    if (coin==="Uniswap") {
        let coinQuantity = parseInt(prompt(`Add value in dolars to buy ${coin}`));
        let uniCoinAmmount = coinQuantity / uniswapCoin;
        //Add gas fee
        alert(`You will receive ${uniCoinAmmount} coins`); 
    };
};
const sandboxCalculator = () => {
    if (coin==="Sandbox") {
        let coinQuantity = parseInt(prompt(`Add value in dolars to buy ${coin}`));
        let sandboxCoinAmmount = coinQuantity / sandboxCoin;
        //Add gas fee
        alert(`You will receive ${sandboxCoinAmmount} coins`); 
    };
};
const coinValidator = () =>  {
    let checkValidator = prompt(`You've selected ${coin}. Do you wish to cotinue? Yes - No`);
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
    if((coin!="Bitcoin" || coin != 'Etherum' || coin != "Solana" || coin != "Uniswap" || coin != "Sandbox")) {
        alert("You didn't select the correct coin. Please, refresh the site and try again.");
    };
};

// ---------------------------- PROGRAM ---------------------------- 
if((coin==="Bitcoin" || coin === 'Etherum' || coin === "Solana" || coin === "Uniswap" || coin === "Sandbox")) {
    coinValidator();
} else {
    coinValidatorFalse();
};