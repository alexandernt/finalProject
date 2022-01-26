let user = document.querySelector('.input__user');
let pw = document.querySelector('.input__password');
let submitBtn = document.querySelector('.loginBtn');
let userObj = JSON.parse(localStorage.getItem('user'));
let errorDiv = document.querySelector('.formError');
let showPwBtn = document.querySelector('.showPw');

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
const showMsgError = (value, msg) =>{
    if(value) {
        errorDiv.innerHTML = `
            <p class="errorMsg"> ${msg} </p>
        `
    } else {
        errorDiv.innerHTML = ""
    };
};

const userLogedNull = () => {
    if (userLoged === null){
        if (userLoged === null){
            alert("You are not register, please register first")
        }
    }
}
userLogedNull();
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


const loginValidation = () =>{
    // Check user
    if(user.value !== userObj.user) {
        showMsgError(true, "User incorrect")
        return false;
    } else{
        showMsgError(false, "")
    }
    // Check PW
    if(pw.value !== userObj.pw ){
        showMsgError(true, "Incorrect password");
        return false;
    } else {
        showMsgError(false, "")
    }
    return true
};

showPwBtn.addEventListener('click', () => {
    if(pw.type === "password") {
        pw.type = "text"
    } else {
        pw.type = "password"
    }
});

submitBtn.addEventListener('click', (e) => {
    console.log(`The user is: ${userObj.user}`);
    console.log(`The password is: ${userObj.pw}`);
    if(loginValidation() == false) {
        loginValidation();
        e.preventDefault();
    } else {
        localStorage.setItem('userLogedIn', true);
    }; 
    
});





