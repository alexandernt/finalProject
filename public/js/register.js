let regForm = document.querySelector('.register__form');
let regName = document.querySelector('.regName');
let regLastName = document.querySelector('.regLastName')
let regEmail = document.querySelector('.regEmail');
let regUser = document.querySelector('.regUser');
let regDate = document.querySelector('.regDate');
let regPw = document.querySelector('.regPw');
let regConfPw = document.querySelector('.regConfPw');
let regCheck = document.getElementById('cbox1');
let regSubmit = document.querySelector('.regBtn');
let formError = document.querySelector('.formError');

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
    Storage.setItem('userLogedIn', false);
});


const showMsgError = (value, msg) =>{
    if(value) {
        formError.innerHTML = `
            <p class="errorMsg"> ${msg} </p>
        `
    } else {
        formError.innerHTML = ""
    };
};


//FORM VALIDATOR
const formValidation = (e) =>{

    // ------- Name Validator -------
    if(regName.value == ""){
        showMsgError(true, "A name is required");
        return false;
    } else {
        showMsgError(false, "");
    }

    // ------- LastName Validator -------
    if (regLastName.value == "") {
        showMsgError(true, "A last name is required");
        return false;
    } else {
        showMsgError(false, "");
    }

    // ------- Email Validator -------
    if (regEmail.value == "") {
        showMsgError(true, "An email is required");
        return false;
    } else {
        showMsgError(false, "");
    }

    // ------- User Validator -------
    if (regUser.value == "") {
        showMsgError(true, "An user is required");
        return false;
    } else {
        showMsgError(false, "");
    }

    // ------- Date Validator -------
    if (regDate.value == "") {
        showMsgError(true, "A date is required");
        return false;
    } else {
        showMsgError(false, "");
    }

    // ------- Password Validator -------
    if (regPw.value == "") {
        showMsgError(true, "A password is required");
        return false;
    } else {
        showMsgError(false, "");
    }
    if (regConfPw.value == "") {
        showMsgError(true, "A password confirmation is required");
        return false;
    } else {
        showMsgError(false, "");
    }
    if(regPw.value.length < 6) {
        showMsgError(true, "Password must have at least 6 characters");
        return false;
    } else {
        showMsgError(false, "")
    }
    
    if (regPw.value !== regConfPw.value) {
        showMsgError(true, "Password confirmation is incorrect");
        return false;
    } else {
        showMsgError(false, "")
    }

    // ------- Checkbox Validator -------
    if (regCheck.checked == false) {
        showMsgError(true, "You must accept our terms");
        return false;
    } else {
        showMsgError(false, "");
    }
    
    return true;
};

// CLASS FOR FORM OBJECT
class FormObj {
    constructor(name, lastName, email, user, date, pw, cpw, regCheck) {
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.user = user;
      this.date = date;
      this.pw = pw;
      this.cpw = cpw;
      this.regCheck = regCheck;
    };
};

regSubmit.addEventListener('click', (e) =>{
    if(formValidation() == true) {
        let user = new FormObj (
            regName.value.trim().toLowerCase(),
            regLastName.value.trim().toLowerCase(),
            regEmail.value.trim(),
            regUser.value.trim(),
            regDate.value,
            regPw.value,
            regConfPw.value,
            regCheck.checked
        );
        let userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
    } else {
        e.preventDefault();
    }
});



