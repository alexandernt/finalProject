let bitCoin = 49760;
let etherumCoin = 3760;
let solanaCoin = 195;
let uniswapCoin = 17.55;
let sandboxCoin = 6.09;
let dolarValue = 204;
const selected1 = document.getElementById("coinsCalc");
const selected2 = document.getElementById("coinsCalc2");
const valueBTN = document.querySelector(".calc__convertor")
console.log(selected2.options[1].text);
let coinHtml = document.querySelector('.coinValue')

let navAccount = document.querySelector('.nav__account-general');
let userLoged = localStorage.getItem('userLogedIn');
let navLogin = document.querySelector('.nav__loged');
let navRegistered = document.querySelector('.nav__registered');
let navLogOut= document.querySelector('.btn__logOut');
let navProfile = document.querySelector('.nav__profile');

console.log(`UserLoged is ${userLoged}`);

const logedInValidator = () => {
  if(userLoged === "true"){
      navLogin.classList.add('nav__login-hide');
      navRegistered.classList.add('nav__login-hide');
  } else {
    navProfile.classList.add('nav__login-hide');
    navLogOut.classList.add('nav__login-hide');
  }
};
logedInValidator();

const checkLoged = () =>{
    if(userLoged === "true"){
        navLogin.classList.add('nav__login-hide');
        navRegistered.classList.add('nav__login-hide')
    };
};
checkLoged();

navLogOut.addEventListener('click', () =>{
    localStorage.removeItem('userLogedIn');
    localStorage.setItem('userLogedIn', false);
});


const valueCoins = (value, msg) =>{
  if(value) {
    coinHtml.innerHTML = `
          <p class="errorMsg"> ${msg} </p>
      `
  } else {
    coinHtml.innerHTML = ""
  };
};


const inputValueForm = () =>{
  valueBTN.addEventListener('click', (e) =>{
  
    e.preventDefault();
    let inputValue = parseInt(document.getElementById("numberInput").value);
    console.log(inputValue);
    let s1 = selected1.value;
    let s2 = selected2.value
    console.log(s1);
    console.log(s2);
    if(inputValue === ""){
      alert("no agregaste valor")

    }
    // BTC CONVERTION TO ETH
    if((s1 === "1") && (s2 === "2")){
        let ethBtc = bitCoin/etherumCoin;
        let finalConvertion = inputValue * ethBtc;
        console.log(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Etherum`)
        valueCoins(true, `
        ${inputValue} Bitcoins are ${finalConvertion.toFixed(8)} Etherums
        `);
    };
    // BTC CONVERTION TO SOL
    if((s1 === "1") && (s2 === "3")){
        let ethBtc = bitCoin/solanaCoin;
        let finalConvertion = inputValue * ethBtc;
        console.log(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Solanas`)
        valueCoins(true, `
        ${inputValue} Bitcoins are ${finalConvertion.toFixed(8)} Solanas
        `);
    } else if((s1 === "1") && (s2 === "4")){
        let ethBtc = bitCoin/uniswapCoin;
        let finalConvertion = inputValue * ethBtc;
        console.log(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Uniswaps`);
        valueCoins(true, `
        ${inputValue} Bitcoins are ${finalConvertion.toFixed(8)} Uniswaps
        `);
    } else if((s1 === "1") && (s2 === "5")){
        let ethBtc = bitCoin/sandboxCoin;
        let finalConvertion = inputValue * ethBtc;
        console.log(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Sandboxes`);
        valueCoins(true, `
        ${inputValue} Bitcoins are ${finalConvertion.toFixed(8)} Sandboxes
        `);
    } else if((s1 === "1") && (s2 === "6")){
        let ethBtc = inputValue * 49760;
        console.log(`${inputValue} Bitcoins son ${ethBtc} USD Dollars`)
        valueCoins(true, `
        ${inputValue} Bitcoins are ${ethBtc} Dollars
        `);
    } else if ((s1==="1") && (s2 === "7")) {
        let ethBtc = inputValue * 49760;
        ethBtcPesos = ethBtc * dolarValue;
        console.log(`${inputValue} Bitcoins son ${ethBtcPesos} pesos argentinos`);
        valueCoins(true, `
        ${inputValue} Bitcoins are ${ethBtcPesos} Pesos Argentinos
        `);
    }
  });
  addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
      // I need to create a .js file so I can import the same code above when the user keypress enter
      alert("Apretaste Enter");
    };
  });
};


const convertor = () =>{
  
  inputValueForm();
};


// APP
convertor();


