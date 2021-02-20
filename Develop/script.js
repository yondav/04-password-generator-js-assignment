// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
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

// Following confirmation prompts will appear when the page is opened and will collect user preferences.
var lowercaseCheck = confirm("Select Okay if you would like to include lowercase letters in your password?");
console.log(lowercaseCheck);
var uppercaseCheck = confirm("Select Okay if you would like to include uppercase letters in your password?");
console.log(uppercaseCheck);
var numberCheck = confirm("Select Okay if you would like to include numbers in your password?");
console.log(numberCheck);
var specialCheck = confirm("Select Okay if you would like to include special characters in your password?")
console.log(specialCheck);
var userPref = "";

// Following if statements will compile the user's preferences to generate a password.
if (lowercaseCheck) {
  userPref += lowercaseChar;
}
if (uppercaseCheck) {
  userPref += uppercaseChar;
}
if (numberCheck) {
  userPref += numberChar;
}
if (specialCheck) {
  userPref += specialChar;
}

console.log(userPref);

// For loop makes it so another character is added until the user set length of password is reached.
// Password = Password + random character based on the users selected inclusions at the length of the user set length.
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
generateBtn.addEventListener("click", writePassword);
