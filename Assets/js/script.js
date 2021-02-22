// Assignment Code
var btn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'~<,>.?/|";

// Write password to the #password input - Thank you Tomek for the !passwordLength method to allow user to cancel out of the prompt box!
function generatePassword() {
  var password = [];
  var passwordLength = prompt("How long would you like your password to be (8-128 characters)?");
    if (!passwordLength) {
      return (""); 
    }else if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Invalid! Please enter a number between 8 and 128.");
      prompt("How long would you like your password to be (8-128 characters)?");
    }else if (passwordLength <= 8 && passwordLength >= 128) {
      generatePassword();
    }

// prompts for userPref
var lowCheck = confirm("Select OK if you would like to include lowercase letters in your password?");
var upCheck = confirm("Select OK if you would like to include uppercase letters in your password?");
var numCheck = confirm("Select OK if you would like to include numbers in your password?");
var specialCheck = confirm("Select OK if you would like to include special characters in your password?")
var userPref = "";

// adds selected character types
if (lowCheck) {
  userPref += lowChar;
}
if (upCheck) {
  userPref += upChar;
}
if (numCheck) {
  userPref += numChar;
}
if (specialCheck) {
  userPref += specialChar;
}

// array starts empty, add a character until the user determined passwordLength is reached
for (var i = 0; i < passwordLength; i++) {
  password += userPref[Math.floor(Math.random() * userPref.length)];
}
return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
btn.addEventListener("click", writePassword);
