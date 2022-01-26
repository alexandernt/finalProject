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

