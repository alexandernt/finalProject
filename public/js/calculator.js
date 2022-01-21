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


const inputValueForm = () =>{
  valueBTN.addEventListener('click', (e) =>{
    e.preventDefault();
    let inputValue = document.getElementById("numberInput").value;
    console.log(inputValue);
    let s1 = selected1.value;
    let s2 = selected2.value
    console.log(s1);
    console.log(s2);
    // BTC CONVERTION TO ETH
    if((s1 === "1") && (s2 === "2")){
        let ethBtc = bitCoin/etherumCoin;
        let finalConvertion = inputValue * ethBtc;
        alert(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Etherum`)
    };
    // BTC CONVERTION TO SOL
    if((s1 === "1") && (s2 === "3")){
        let ethBtc = bitCoin/solanaCoin;
        let finalConvertion = inputValue * ethBtc;
        alert(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Solanas`)
    } else if((s1 === "1") && (s2 === "4")){
        let ethBtc = bitCoin/uniswapCoin;
        let finalConvertion = inputValue * ethBtc;
        alert(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Uniswaps`)
    } else if((s1 === "1") && (s2 === "5")){
        let ethBtc = bitCoin/sandboxCoin;
        let finalConvertion = inputValue * ethBtc;
        alert(`${inputValue} Bitcoins son ${finalConvertion.toFixed(8)} Sandboxes`)
    } else if((s1 === "1") && (s2 === "6")){
        let ethBtc = bitCoin * 49760;
        alert(`${inputValue} Bitcoins son ${ethBtc} USD Dollars`)
    } else {
        let ethBtc = bitCoin * 49760;
        ethBtcPesos = ethBtc * dolarValue;
        alert(`${inputValue} Bitcoins son ${ethBtcPesos} pesos argentinos`)
    }
  });
}


const convertor = () =>{
  inputValueForm();
};


// APP
convertor();
