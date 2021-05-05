var number = "123456789"
var upperLetter = "ABCDEFGHIJKLMNOP"
var LowerLetter = "abcdefghijklmnop"
var symbol = "!@#$%^&*()_+=-*"


var mainString = ""
var newPassword = ""
function PassGen() {
  var numRespon = prompt("Would you like to use a number? Please put Y for yes N for no");
  while (numRespon !== "Y" && numRespon !== "N") {
    numRespon = prompt("Would you like to use a number? Please put Y for yes N for no");
  };
  var upperRespon = prompt("Would you like to use upper case letters? Please put Y for yes N for no");
  while (upperRespon !== "Y" && upperRespon !== "N") {
    upperRespon = prompt("Would you like to use upper case letters? Please put Y for yes N for no")

  };
  var lowerRespon = prompt("Would you like to use lower case letters? Please put Y for yes N for no");
  while (lowerRespon !== "Y" && lowerRespon !== "N") (
    lowerRespon = prompt("Would you like to use lower case letters? Please put Y for yes N for no")
  )
  var symbolRespon = prompt("Would you like to use a symbol? Please put Y for yes N for no");
  while (symbolRespon !== "Y" && symbolRespon!== "N") {
    symbolRespon = prompt("Would you like to use a symbol? Please put Y for yes N for no")
  };
  var lengthRespon = prompt("How long would you like the passord? Must be between 8 and 128 charcters in length");
  while (lengthRespon < 8 || lengthRespon > 128) {
    lengthRespon = prompt("How long would you like the passord? Must be between 8 and 128 charcters in length")
  };


  if (numRespon === "Y"){ mainString += number};
  if (upperRespon === "Y"){ mainString += upperLetter};
  if (lowerRespon === "Y"){mainString += LowerLetter};
  if (symbol === "Y"){ mainString += symbol};
  for (var i = 0; i < lengthRespon; i++) {
    var random = mainString[Math.floor(Math.random() * mainString.length)]
    newPassword += random
  };
  return newPassword
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = PassGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

