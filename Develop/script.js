// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", "\\", ";", "[", "]", ":", "{", "}", "|", "_"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = prompt("How long do you want your password?");
  if (length<8 || length>128) {
    alert("Password length not in bounds");
    return;
  }
  var wantsUppercase = confirm("Do you want uppercase characters");
  var wantsLowercase = confirm("Do you want lowercase characters?");
  var wantsNumbers = confirm("Do you want numbers?");
  var wantsSpecialChar = confirm("Do you want special characters?");
  var options = [];
  if (wantsUppercase === true) {
    options=options.concat(uppercase);
  }
  if (wantsLowercase === true) {
    options=options.concat(lowercase);
  }
  if (wantsNumbers === true) {
    options=options.concat(numbers);
  }
  if (wantsSpecialChar === true) {
    options=options.concat(specialCharacters);
  }
  var password = ""
  for (var i=0; i<length; i++) {
    var randomChar = options[Math.floor(Math.random()*options.length)]
    password += randomChar;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



