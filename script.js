// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//create function in order to take the user through the prompts to choose what type of password they want to generate//

function generatePassword() {
  var input = prompt ("Enter the number of characters you would like your password to be.Must be between 8-128 characters.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
