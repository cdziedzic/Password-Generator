// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays that will be used to pick a password character from
let lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = [0,1,2,3,4,5,6,7,8,9]
let special = [" ", "!", '"', "$","#","%","&","(",")"]

// Array that will be filled with above arrays as responses on page are picked
let builtArray = []


function generatePassword () {
  
  //let user enter desired password size
  let password = "";
  let passwordLength =prompt("Select a password length between 8 and 128 characters")

  //verify password length is between 8 and 128
  while (passwordLength < 8 || passwordLength > 128) {
    alert ("password must be between 8 and 128 characters")
    passwordLength =prompt("Select a password length between 8 and 128 characters")
  }
  
  let confirmLowerCase = confirm("Do you want your password to contain lower case letters?")
  let confirmUpperCase = confirm("Do you want your password to contain uppercase letters?")
  let confirmNumber =  confirm("Do you want your password to contain numbers?")
  let confirmSpecial = confirm("Do you want your password to contain special characters?")

  //If statement that adds each type of character to the potential password
  if (confirmLowerCase) 
  {
    builtArray = [...builtArray, ...lowerAlphabet];

  }
  
  if (confirmUpperCase)
  {

   builtArray = [...builtArray, ...upperAlphabet];

  }

  if (confirmNumber)
  {

    builtArray = [...builtArray, ...numbers];

  }
  
  if (confirmSpecial) 
  {

    builtArray = [...builtArray, ...special];
  }

if (confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpecial === false) {
  alert("must select at least one character type");
  return null;
}

  //generate random characters based on password length
   for (let index = 0; index < passwordLength; index++) {
      let generateCharacter= Math.floor(Math.random()*builtArray.length)
     
    
    password += builtArray[generateCharacter];
    }
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  builtArray = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
