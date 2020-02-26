// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = parseInt(input);
var alpha = confirm("Would you like to include lowercase numbers?");
    var caps = confirm("Would you like to include capital letters?");
    var numeric = confirm("Would you like to include numbers?");
    var special= confirm("Would you like to include special characters?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//create function in order to take the user through the prompts to choose what type of password they want to generate//

function generatePassword() {
  var input = prompt ("Enter the number of characters you would like your password to be.Must be between 8-128 characters.");

  if (input >= 8 && input <= 128) {
    passwordLength = parseInt(input);
    
     confirm("Would you like to include lowercase numbers?");
     confirm("Would you like to include capital letters?");
    confirm("Would you like to include numbers?");
    confirm("Would you like to include special characters?"); 
    
   
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
