const navBar = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".nav__menu");
const burgerMenu = document.querySelector(".box");
const navBox1 = document.querySelector(".box1");
const navBox2 = document.querySelector(".box2");
const navBox3 = document.querySelector(".box3");
const navCoins = document.querySelector(".nav__coins");
const coinsAngle = document.querySelector(".angleDown1");
const nftAngle = document.querySelector(".angleDown2");
const navNft = document.querySelector(".nav__nft");

// -------------------------------- MENU BAR --------------------------------
const showMenu = () => {
  navMenu.classList.add("show-menu");
};

const removeMenu = () => {
  navMenu.classList.remove("show-menu");
};

let clickState = 1;
burgerMenu.addEventListener("click", () => {
  clickState++;
  if (clickState % 2 === 0) {
    showMenu();
    navBox2.classList.add("box2-rotate");
    navBox1.classList.add("box1-rotate");
    navBox3.classList.add("box3-rotate");
  } else {
    removeMenu();
    navBox2.classList.remove("box2-rotate");
    navBox1.classList.remove("box1-rotate");
    navBox3.classList.remove("box3-rotate");
  }
});

coinsAngle.addEventListener("click", () => {
  navCoins.classList.add("nav__coins-active");
  clickState++;
  if (clickState % 2 === 0) {
    coinsAngle.classList.remove("nav__angle-up");
    navCoins.classList.remove("nav__coins-active");
  } else coinsAngle.classList.add("nav__angle-up");
});

nftAngle.addEventListener("click", () => {
  navNft.classList.add("nav__nft-active");
  clickState++;
  if (clickState % 2 === 0) {
    nftAngle.classList.remove("nav__angle-up");
    navNft.classList.remove("nav__nft-active");
  } else nftAngle.classList.add("nav__angle-up");
});
