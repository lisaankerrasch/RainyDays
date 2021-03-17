const form = document.querySelector("#cart-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#fnameError");
const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector("#lnameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addresserror");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#ziperror");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityerror");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryerror");
const cartButton = document.querySelector(".cart-button");

const checkSymbol1 = document.querySelector(".checksymbol1");
const checkSymbol2 = document.querySelector(".checksymbol2");
const checkSymbol3 = document.querySelector(".checksymbol3");
const checkSymbol4 = document.querySelector(".checksymbol4");
const checkSymbol5 = document.querySelector(".checksymbol5");
const checkSymbol6 = document.querySelector(".checksymbol6");
const checkSymbol7 = document.querySelector(".checksymbol7");

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
  if (checkLength(firstName.value, 0)) {
    checkSymbol2.style.display = "inline";
  }
  if (checkLength(lastName.value, 0)) {
    checkSymbol3.style.display = "inline";
  }
  if (checkLength(address.value, 4)) {
    checkSymbol4.style.display = "inline";
  }
  if (checkLength(zip.value, 3)) {
    checkSymbol5.style.display = "inline";
  }
  if (checkLength(city.value, 0)) {
    checkSymbol6.style.display = "inline";
  }
  if (checkLength(country.value, 0)) {
    checkSymbol7.style.display = "inline";
  }
}

function validateForm(event) {
  event.preventDefault();
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
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
  if (checkLength(address.value, 4)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (checkLength(zip.value, 3)) {
    zipError.style.display = "none";
  } else {
    zipError.style.display = "block";
  }
  if (checkLength(city.value, 0)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (checkLength(country.value, 0)) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
}

function submitForm(event) {
  if (
    validateEmail(email.value) &&
    checkLength(firstName.value, 0) &&
    checkLength(lastName.value, 0) &&
    checkLength(address.value, 4) &&
    checkLength(zip.value, 3) &&
    checkLength(city.value, 0) &&
    checkLength(country.value, 0)
  ) {
    window.location.replace("shipping.html");
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);
form.addEventListener("keyup", checkSign);
