// Assignment Code
var generateBtn = document.querySelector("#generate");
var yourPass = document.getElementById("password");
var characters = "";
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alpha2 = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()-+=<>?~[]{}";
var passLength = "";

// var howMany = prompt("Welcome to your Random Password Generator. Please pick a number between 8-128 for your password.") 


startUp();

generateBtn.addEventListener("click", function() {
  yourPass.value = generatePassword(passLength, characters)
})

function startUp() {
  var howMany = prompt("Welcome to your Random Password Generator. Please pick a number between 8-128 for your password.") 
  if (howMany < 8 || howMany > 128) {
    alert("Please reload and pick a number between 8-128")
  } else {
    passLength += howMany
    var alphaConfirm = confirm("Would you like capital letter?")
    var alpha2Confirm = confirm("Would you like lower case letters?")
    var numbersConfirm = confirm("Would you like numbers?")
    var specialConfirm = confirm("Would you like special characters?")
  }

  if (alphaConfirm === false && alpha2Confirm === false && numbersConfirm === false && specialConfirm === false) {
    alert("You gotta click yes on something, man")
  } 
  if (alphaConfirm === true) {
    characters += alpha
  } 
  if ( alpha2Confirm === true) {
    characters += alpha2
  } 
  if (numbersConfirm === true) {
    characters += numbers
  } 
  if (specialConfirm === true) {
    characters += special
  }
}

function generatePassword(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}