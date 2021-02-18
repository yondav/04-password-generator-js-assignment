// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Character types
// var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var specialChar = "!@#$%^&*()_-+={}[];:'~<,>.?/|";

// // Password length & number of each character type
// var passwordLength;
// var uppercaseCheck;
// var numbersCheck;
// var specialCheck;

// // Determine length of password

// function determineLength() {
//   passwordLength = prompt("How long would you like your password to be (8-128 characters)?");

//   if (passwordLength < 8) {
//     alert("Password must be at least 8 characters long.");
//     determineLength();
//   }else if (passwordLength > 128) {
//     alert("Password must be less than 128 characters long.");
//     determineLength();
//   }else if(isNaN(passwordLength)) {
//     alert("Invalid character! Please select a number between 8 and 128.");
//     determineLength();
//   }else {
//     return passwordLength;
//   }
// }

// // Determine whether user wants uppercase characters in password

// function determineUppercase() {
//   uppercaseCheck = prompt("Would you like to include uppercase letters in your password? \n(yes or no)");
//   // uppercaseCheck = uppercaseCheck.toLowerCase();

//   if (uppercaseCheck === null || uppercaseCheck === "") {
//     alert("Invalid! Please select yes or no.");
//   }else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
//     uppercaseCheck = true;
//     return uppercaseCheck;
//   }else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
//     uppercaseCheck = false;
//     return uppercaseCheck;
//   }else {
//     alert("Invalid! Please select yes or no.");
//     determineUppercase();
//   }
//   return uppercaseCheck;
// }

// // Determine numbers in password
// function determineNumbers() {
//   numbersCheck = prompt("Would you like to include numbers in your password? \n(yes or no)");
//   // numbersCheck = numbersCheck.toLowerCase();

//   if (numbersCheck === null || numbersCheck === "") {
//     alert("Please select an answer!");
//     determineNumbers();
//   }else if (numbersCheck === "yes" || numbersCheck === "y") {
//     numbersCheck = true;
//     return numbersCheck;
//   }else if (numbersCheck === "no" || numbersCheck === "n") {
//     numbersCheck = false;
//     return numbersCheck;
//   }else {
//     alert("Yes or No?");
//     determineNumbers();
//   }
//   return numbersCheck;
// }

// // Determine whether user wants special characters in password
// function determineSpecial() {
//   specialCheck = prompt("Would you like to include any special characters in your password? \n (Yes or No)");
//   // specialCheck = specialCheck.toLowerCase();

//   if (specialCheck === null || specialCheck === "") {
//     alert("Please select an answer!");
//     determineSpecial();
//   }else if (specialCheck === "yes" || specialCheck === "y") {
//     specialCheck = true;
//     return specialCheck;
//   }else if (specialCheck === "no" || specialCheck === "n") {
//     specialCheck = false;
//     return specialCheck;
//   }else {
//     alert("Yes or No?")
//     determineSpecial();
//   }
//   return specialCheck;
// }

// // Generate password using information from answers to previous prompts
// function generatePassword() {
//   determineLength();
//   console.log(passwordLength);
//   determineUppercase();
//   console.log(uppercaseCheck);
//   determineNumbers();
//   console.log(numbersCheck);
//   determineSpecial();
//   console.log(specialCheck);

//   var characters = lowercaseChar;
//   var password = "";
//   // All - ** works
//   if (uppercaseCheck && numbersCheck && specialCheck) {
//     characters += uppercaseChar + numbers + specialChar;
//   // Uppercase, Numbers & Lowercase - no password comes back
//   }else if (uppercaseCheck && numbersCheck) {
//     characters += uppercaseChar + numbersChar;
//   // Numbers, Special & Lowercase - no password comes back    
//   }else if (numbersCheck && specialCheck) {
//     characters += numbersChar + specialChar;
//   // Uppercase, Special & Lowercase - ** works
//   }else if (uppercaseCheck && specialCheck) {
//     characters += uppercaseChar + specialChar;
//   // Uppercase & Lowercase - ** works
//   }else if (uppercaseCheck) {
//     characters += uppercaseChar;
//   // Numbers & Lowercase - only lowercase comes back
//   }else if (numbersCheck) {
//     characters += numbersCheck;
//   // Special & lowercase - ** works  
//   }else if (specialChar) {
//     characters += specialChar;
//   // All Lowercase - lowercase and special comes back
//   }else{
//     characters === lowercaseChar;
//   }

//   for(var i = 0; i < passwordLength; i++) {
//     password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return password;
// }


// // Write password to the #password input
// function writePassword() {
//   var password = "";
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'~<,>.?/|";

// Following confirmation prompts will appear when the page is opened and will collect user preferences.
var lowercaseCheck = confirm("Would you like to include lowercase letters in your password?");
console.log(lowercaseCheck);
var uppercaseCheck = confirm("Would you like to include uppercase letters in your password?");
console.log(uppercaseCheck);
var numberCheck = confirm("Would you like to include numbers in your password?");
console.log(numberCheck);
var specialCheck = confirm("Would you like to include special characters in your password?")
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

// Write password to the #password input
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
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
