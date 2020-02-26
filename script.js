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

  if (input >= 8 && input <= 128) {
    passwordLength = parseInt(input);
    
    confirm("Would you like to include lowercase letters?");
     confirm("Would you like to include capital letters?");
    confirm("Would you like to include numbers?");
    confirm("Would you like to include special characters?"); 
    
  } 
  //if the user does not choose a number to meet requirement it will alert them//
  else if (input < 8 || input > 128) {
    
    alert ("Does not meet requirement.Please try again");
  }
// the application will return back to the prompt to enter a number for the length of the password//
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
