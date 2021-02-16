// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var numbersCheck;
var specialCheck;

// Determine length of password

function determineLength() {
  passwordLength = prompt("How long would you like your password to be (8-128 characters)?");

  if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    determineLength();
  }else if (passwordLength > 128) {
    alert("Password must be less than 128 characters long.");
    determineLength();
  }else if(isNaN(passwordLength)) {
    alert("Invalid character! Please select a number between 8 and 128.");
    determineLength();
  }else {
    alert("Moving on...")
  }
}

// Determine whether user wants uppercase characters in password

function determineUppercase() {
  uppercaseCheck = prompt("Would you like to include uppercase letters in your password? \n(yes or no)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Invalid! Please select yes or no.");
  }else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  }else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  }else {
    alert("Invalid! Please select yes or no.");
    determineUppercase();
  }
  return uppercaseCheck;
}

// Determine numbers in password
function determineNumbers() {
  numbersCheck = prompt("Would you like to include numbers in your password? \n(yes or no)");
  numbersCheck = numbersCheck.toLowerCase();

  if (numbersCheck === null || numbersCheck === "") {
    alert("Please select an answer!");
    determineNumbers();
  }else if (numbersCheck === "yes" || numbersCheck === "y") {
    numbersCheck = true;
    return numbersCheck;
  }else if (numbersCheck === "no" || numbersCheck === "n") {
    numbersCheck = false;
    return numbersCheck;
  }else {
    alert("Yes or No?");
    determineNumbers();
  }
  return numbersCheck;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
