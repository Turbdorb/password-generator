// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt how many characters
  var charLength = parseInt(window.prompt("Enter character length (8 to 128 characters):"));
  console.log(charLength);
  if (!(charLength >= 8 && charLength <= 128)) {
    window.alert("Password length must be between 8 to 128 characters!");
    return;
  }
  // var for characters
  var passwordCharacters = [];
  // What types of characters
  // special, number, upper, lower
  // vars that include all possible characters
  // separate vars for each type, arrays
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "`", "[", "]", "{", "}", "|", "?", "/", "<", ">", ";"];
  // window.confirm
  var includeLowerChars = window.confirm("Include lowercase characters?");
  var includeUpperChars = window.confirm("Include uppercase characters?");
  var includeNumericChars = window.confirm("Include numeric characters?");
  var includeSpecialChars = window.confirm("Include special characters?");
  // Add an if to make sure the user chooses a character to add
  // Use answers to make password
  if (includeLowerChars) {
    passwordCharacters = passwordCharacters.concat(lowercaseChars);
  }
  if (includeUpperChars) {
    passwordCharacters = passwordCharacters.concat(uppercaseChars);
  }
  if (includeNumericChars) {
    passwordCharacters = passwordCharacters.concat(numericChars);
  }
  if (includeSpecialChars) {
    passwordCharacters = passwordCharacters.concat(specialChars);
  }
  console.log(passwordCharacters);
  // take all true arrays and concat into a new array -loop
  // choose random characters from array based on user input
  var generatedPassword = "";
  for (var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    generatedPassword += passwordCharacters[randomIndex];
  }
  console.log(generatedPassword);
  // var push into new array
  // var password = turn array into string, .toString()
  console.log(password);
  return generatedPassword;
}