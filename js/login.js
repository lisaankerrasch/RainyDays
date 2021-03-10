const form = document.querySelector("#contact-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passworderror");
const success = document.querySelector(".success");
const checkSymbol1 = document.querySelector(".checksymbol1");
const checkSymbol2 = document.querySelector(".checksymbol2");

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

function checkSign(event) {
  if (validateEmail(email.value)) {
    checkSymbol1.style.display = "inline";
  }
  if (checkLength(password.value, 7)) {
    checkSymbol2.style.display = "inline";
  }
}

function validateForm(event) {
  event.preventDefault();
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
}

function submitForm(event) {
  if (checkLength(password.value, 7) && validateEmail(email.value)) {
    event.preventDefault;
    window.location.replace("my-profile.html");
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);
form.addEventListener("keyup", checkSign);
