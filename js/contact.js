const form = document.querySelector("#contact-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#fnameError");
const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector("#lnameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passworderror");
const success = document.querySelector(".success");
const repeatPassword = document.querySelector("#rpassword");
const rpasswordError = document.querySelector("#rpassworderror");
const checkSymbol1 = document.querySelector(".checksymbol1");
const checkSymbol2 = document.querySelector(".checksymbol2");
const checkSymbol3 = document.querySelector(".checksymbol3");
const checkSymbol4 = document.querySelector(".checksymbol4");
const checkSymbol5 = document.querySelector(".checksymbol5");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkPassword(form) {
  const password1 = form.password.value;
  const password2 = form.rpassword.value;
  if (password2 === password1) {
    return true;
  } else {
    return false;
  }
}

function checkSign(event) {
  if (validateEmail(email.value)) {
    checkSymbol1.style.display = "inline";
  }
  if (checkLength(firstName.value, 0)) {
    checkSymbol2.style.display = "inline";
  }
  if (checkLength(lastName.value, 0)) {
    checkSymbol3.style.display = "inline";
  }
  if (checkLength(password.value, 7)) {
    checkSymbol4.style.display = "inline";
  }
  if (checkLength(repeatPassword.value, 7) && checkPassword(form) === true) {
    checkSymbol5.style.display = "inline";
  }
}

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0)) {
    fnameError.style.display = "none";
  } else {
    fnameError.style.display = "block";
  }
  if (checkLength(lastName.value, 0)) {
    lnameError.style.display = "none";
  } else {
    lnameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(password.value, 7)) {
    passworderror.style.display = "none";
  } else {
    passworderror.style.display = "block";
  }
  if (checkPassword(form) === true) {
    rpasswordError.style.display = "none";
  } else rpasswordError.style.display = "block";
}

function submitForm(event) {
  if (
    checkLength(firstName.value, 0) &&
    checkLength(lastName.value, 0) &&
    checkLength(password.value, 7) &&
    validateEmail(email.value) &&
    checkPassword(form) === true
  ) {
    event.preventDefault;
    window.location.replace("my-profile.html");
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);
form.addEventListener("keyup", checkSign);
