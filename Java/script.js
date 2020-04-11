// Assignment Code
var generateBtn = document.querySelector("#generate");
var yourPass = document.getElementById("password");
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var lowBox = document.getElementById("low");
var specBox = document.getElementById("spec");

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alpha2 = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*";

generateBtn.addEventListener("click", function() { 
  var characters = alpha;
    (numBox.checked) ? characters += numbers : '';
    (lowBox.checked) ? characters += alpha2 : '';
    (specBox.checked) ? characters += special : '';
    yourPass.value = generatePassword(charNum.value, characters);
});

function generatePassword(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}