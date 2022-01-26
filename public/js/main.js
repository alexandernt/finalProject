const btcBtn = document.querySelector(".btc__btn");
const ethBtn = document.querySelector(".eth__btn");
const solBtn = document.querySelector(".sol__btn");
const uniBtn = document.querySelector(".uni__btn");
const sandBtn = document.querySelector(".sand__btn");
let addText = document.getElementById("addingObject");




let userLoged = localStorage.getItem('userLogedIn');
let navLogin = document.querySelector('.nav__loged');
let navRegistered = document.querySelector('.nav__registered');
let navLogOut= document.querySelector('.btn__logOut');
let navProfile = document.querySelector('.nav__profile');

const logedValidator = function logedInValidator() {
  if(userLoged === "true"){
      navLogin.classList.add('nav__login-hide');
      navRegistered.classList.add('nav__login-hide');
  } else {
    navProfile.classList.add('nav__login-hide');
    navLogOut.classList.add('nav__login-hide');
  }
};
logedValidator();

const checkLoged = function () {
  if(userLoged === "true"){
      navLogin.classList.add('nav__login-hide');
      navRegistered.classList.add('nav__login-hide')
  };
};
checkLoged();

const logOut = function () {
    navLogOut.addEventListener('click', () =>{
        localStorage.removeItem('userLogedIn');
        localStorage.setItem('userLogedIn', false);
    });
};
logOut();



// IMPORTING MODULES 
let bitCoin = 49760;
let etherumCoin = 3760;
let solanaCoin = 195;
let uniswapCoin = 17.55;
let sandboxCoin = 6.09;
let dolarValue = 204;

// -------------------------------- CLASSES --------------------------------
// Class for Register user
class User {
  constructor(name, lastName, age, country, city, address) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.address = address;
  }
  userInfo() {
    console.log(
      `${this.name} ${this.lastName} is the user. He/she has ${this.age} years old and lives in ${this.country}`
    );
  }
}
// Class for Crypto information
class CryptoData {
  constructor(cryptoCoin, cryptoDollars, cryptoAmount, cryptoFee, cryptoPrice) {
    this.cryptoCoin = cryptoCoin;
    this.cryptoDollars = cryptoDollars;
    this.cryptoAmount = cryptoAmount;
    this.cryptoFee = cryptoFee;
    this.cryptoPrice = cryptoPrice;
  }
  cryptoInfo() {
    console.log(
      `the user has spent ${this.cryptoDollars} dollars, which are ${this.cryptoPrice} ${this.cryptoCoin}`
    );
  }
}
// -------------------------------- FORMULAS --------------------------------
// User Register
const register = () => {
  //Starting message
  alert(
    "Before start the coins transaction, you need to register in our app. So, please complete the following information"
  );
  // Starting data registration in object
  const user1 = new User(
    prompt("Add your name").toLowerCase().trim(),
    prompt("Add your last name").toLowerCase().trim(),
    parseInt(prompt("Add your age").trim()),
    prompt("Add your country").toLowerCase().trim(),
    prompt("Add your city").toLowerCase().trim(),
    prompt("Add your address").toLowerCase().trim()
  );
  console.log("The user data registration it's: ");
  console.log(user1);
  user1.userInfo();
};

// Adding gas fee function
// JIC: gas fee will be 6% of the coin amount. Doesn't matter which coin.
const gasfeeCalculator = (x) => {
  let gasfee = (6 * x) / 100;
  return gasfee.toFixed(8); //Natoshi Sakamota
};

// Less than 20 dollars can't continue
const coinDollarsValidator = (e) => {
  while (e <= 5) {
    alert("You need at least $5 of investment. Please, try again.");
    e = parseInt(prompt(`Add value in dollars to buy`));
  }
};

const bitCoinCalculator = () => {
  let coin = "bitcoin";
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
  alert(
    `Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`
  );
  // Class registration
  const cryptoBtc = new CryptoData(
    coin,
    coinQuantity,
    bitCoinAmmount,
    gasfeeCalculator(natoshiSaka),
    finalPrice
  );
  console.log("The crypto data it's: ");
  console.log(cryptoBtc);
  cryptoBtc.cryptoInfo();

  const addingText = () => {
    
    addText.innerHTML = `
    <h1>Transaction information</h1>
    <p>Crypto: ${coin}</p>
    <p>Value in dollars:  ${coinQuantity} $USD</p>
    <p>Bitcoin amount: ${natoshiSaka} BTC</p>
    <p>Transaction gas fee: ${gasfeeCalculator(natoshiSaka)} BTC</p>
    <p>Final Price: ${finalPrice} BTC</p>
    <button class="btn btn__test" style="color:white">Click</button>
    `
    let btnTest = document.querySelector('.btn__test');
    btnTest.addEventListener('click', () =>{
      let test = parseInt(prompt("Cambiar valor de dolares"));
      addText.innerHTML = `
      <h1>Just a change</h1>
      <p>Crypto: ${test}</p>
      
      `
    });
    
  };
  addingText()
};

const etherumCalculator = () => {
  let coin = "etherum";
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
  alert(
    `Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`
  );
  // Class registration
  const cryptoBtc = new CryptoData(
    coin,
    coinQuantity,
    ethCoinAmmount,
    gasfeeCalculator(natoshiSaka),
    finalPrice
  );
  console.log("The crypto data it's: ");
  console.log(cryptoBtc);
  cryptoBtc.cryptoInfo();
  const addingText = () => {
    addText.innerHTML = `
    <h1>Transaction information</h1>
    <p>Crypto: ${coin}</p>
    <p>Value in dollars:  ${coinQuantity} $USD</p>
    <p>Bitcoin amount: ${natoshiSaka} ETH</p>
    <p>Transaction gas fee: ${gasfeeCalculator(natoshiSaka)} ETH</p>
    <p>Final Price: ${finalPrice} ETH</p>
    `
  
  }
  addingText()
};

const solanaCalculator = () => {
  let coin = "solana";
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
  alert(
    `Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`
  );
  // Class registration
  const cryptoBtc = new CryptoData(
    coin,
    coinQuantity,
    solCoinAmmount,
    gasfeeCalculator(natoshiSaka),
    finalPrice
  );
  console.log("The crypto data it's: ");
  console.log(cryptoBtc);
  cryptoBtc.cryptoInfo();
  const addingText = () => {
    addText.innerHTML = `
    <h1>Transaction information</h1>
    <p>Crypto: ${coin}</p>
    <p>Value in dollars:  ${coinQuantity} $USD</p>
    <p>Bitcoin amount: ${natoshiSaka} SOL</p>
    <p>Transaction gas fee: ${gasfeeCalculator(natoshiSaka)} SOL</p>
    <p>Final Price: ${finalPrice} SOL</p>
    `
  
  }
  addingText()
};
const uniCalculator = () => {
  let coin = "uniswap";
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
  alert(
    `Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`
  );
  const cryptoBtc = new CryptoData(
    coin,
    coinQuantity,
    uniCoinAmmount,
    gasfeeCalculator(natoshiSaka),
    finalPrice
  );
  console.log("The crypto data it's: ");
  console.log(cryptoBtc);
  cryptoBtc.cryptoInfo();
  const addingText = () => {
    addText.innerHTML = `
    <h1>Transaction information</h1>
    <p>Crypto: ${coin}</p>
    <p>Value in dollars:  ${coinQuantity} $USD</p>
    <p>Bitcoin amount: ${natoshiSaka} UNI</p>
    <p>Transaction gas fee: ${gasfeeCalculator(natoshiSaka)} UNI</p>
    <p>Final Price: ${finalPrice} UNI</p>
    `
  
  }
  addingText()
};
const sandboxCalculator = () => {
  let coin = "sandbox";
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
  alert(
    `Instead of ${natoshiSaka}, you will receive ${finalPrice} coins due to Gas Fee transactions`
  );
  const cryptoBtc = new CryptoData(
    coin,
    coinQuantity,
    sandboxCoinAmmount,
    gasfeeCalculator(natoshiSaka),
    finalPrice
  );
  console.log("The crypto data it's: ");
  console.log(cryptoBtc);
  cryptoBtc.cryptoInfo();
  const addingText = () => {
    addText.innerHTML = `
    <h1>Transaction information</h1>
    <p>Crypto: ${coin}</p>
    <p>Value in dollars:  ${coinQuantity} $USD</p>
    <p>Bitcoin amount: ${natoshiSaka} SAND</p>
    <p>Transaction gas fee: ${gasfeeCalculator(natoshiSaka)} SAND</p>
    <p>Final Price: ${finalPrice} SAND</p>
    `
    
  }
  addingText()
};


// ARRAY TASK CLASS 6
let ourCoins = [
  "Bitcoin",
  "Etherum",
  "Solana",
  "Uniswap",
  "Sandbox"
];

const ourCoinsFeedback = () => {
  let pushCoin = prompt("Write a crypto coin that you want to add to our market");
  ourCoins.push(pushCoin);
  console.log(ourCoins);
}; 




btcBtn.addEventListener("click", () => {
  register();
  bitCoinCalculator();
  ourCoinsFeedback();
});

ethBtn.addEventListener("click", () => {
  register();
  etherumCalculator();
  ourCoinsFeedback();
});

solBtn.addEventListener("click", () => {
  register();
  solanaCalculator();
  ourCoinsFeedback();
});
uniBtn.addEventListener("click", () => {
    register();
    uniCalculator();
    ourCoinsFeedback();
});
sandBtn.addEventListener('click', () =>{
    register();
    sandboxCalculator();
    ourCoinsFeedback();
});




