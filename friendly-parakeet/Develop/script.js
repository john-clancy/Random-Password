// Assignment Code
var generateBtn = document.querySelector("#generate");

//Get references to the #generate element
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialCharacterArray = ['!','@','#','$','%','^','&','*','?','~','+']
var numberArray= ['1','2','3','4','5','6','7','8','9','0']
var masterListArray = [];
var inputArray =[];


//Prompt windows 
function generatePassword() {

  var promptLength = window.prompt("How many Characters would you like the passwrod to be? (Choose between 8 to 16 Characters)")
  //prompt for too long of a password
    if (promptLength <8 || promptLength> 16) {
      window.alert("Password is too long please limit to 16 Characters")
      generatePassword();
    }
  // lowercase selector
  var lowerCaseChoice = window.confirm("Would you like to include Lowercase letters in your password?")
    if (lowerCaseChoice === true) {
      masterListArray = masterListArray.concat(lowerCaseArray)
    }
  // uppercase selector
  var upperCaseChoice = window.confirm("Would you like to include Uppercase letters in your password?")
    if (upperCaseChoice === true) {
      masterListArray = masterListArray.concat(upperCaseArray)
    }
  // special character selector
  var specialCaharacterChoice = window.confirm("Would you like to include Special Characters ie(!,@,#,$) in your password?")
    if (specialCaharacterChoice === true) {
      masterListArray = masterListArray.concat(specialCharacterArray)
    }
  // number selector
  var numberChoice = window.confirm("Would you like to include numbers in your password?")
    if (numberArray === true) {
      masterListArray =masterListArray.concat(numberArray)
    }
    console.log(masterListArray)


for (var i =0; i< promptLength; i++) {
  inputArray.push(masterListArray[Math.floor(Math.random()* masterListArray.length)]);
}
return inputArray.join("");
}



// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








