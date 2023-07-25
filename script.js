// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = [0,1,2,3,4,5,6,7,8,9]
let special = [" ", "!", '"', "$","#","%","&","(",")"]


function generatePassword () {
  if (confirm("Do you want your password to contain lower case letters?")){

  }
  
  if(confirm("Do you want your password to contain uppercase letters?")){

  }

  if (confirm("Do you want your password to contain special characters?")){

  }

  let password = "";
  let passwordLength =prompt("How many characters do your want your password to be?")
    for (let i = 0; i < passwordLength ; i++)

    password += "x";
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
