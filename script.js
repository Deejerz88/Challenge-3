// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let charArr = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  "0123456789",
];

function generatePassword() {
  let password = "";
  let chars = "";

  let pwLen = window.prompt(
    "How many characters would you like to use (min: 8, max: 128)"
  );
  if (pwLen === null || pwLen === undefined) {
    return "Your Secure Password";
  }
  pwLen = pwLen === "" ? 0 : pwLen;
  if (pwLen < 8 || pwLen > 128)
    do {
      pwLen = prompt(
        `${pwLen} character(s) entered. Please specify a length between 8 and 128 characters`
      );
      if (pwLen === null || pwLen === undefined) {
        return "Your Secure Password";
      }
      pwLen = pwLen === "" ? 0 : pwLen;
    } while (pwLen < 8 || pwLen > 128);

  if (isNaN(pwLen)) return pwLen;

  window.alert(`${pwLen} characters chosen`);

  let typeChoice = window.prompt(
    `Please specify the type of characters you would like to use.\n  1. lowercase\n  2. UPPERCASE\n  3. Special Characters\n  4. Numbers\nYou may enter multiple numbers seperated by a comma (ex:1,3,4)`
  );

  if (typeChoice === null || typeChoice === undefined)
    return "Your Secure Password";

  typeChoice = typeChoice.replace(" ", "");
  typeArr =
    typeChoice.replace(",", "").length > 1
      ? typeChoice.split(",")
      : [typeChoice.toString()];
  if (
    typeArr.indexOf("1") === -1 &&
    typeArr.indexOf("2") === -1 &&
    typeArr.indexOf("3") === -1 &&
    typeArr.indexOf("4") === -1
  )
    do {
      typeChoice = window.prompt(
        `Incorrect input. Please specify the type of characters you would like to use.\n  1. lowercase\n  2. UPPERCASE\n  3. Special Characters\n  4. Numbers\nYou may enter multiple numbers seperated by a comma (ex:1,3,4)`
      );
      if (typeChoice === null || typeChoice === undefined)
        return "Your Secure Password";
      typeChoice = typeChoice.replace(" ", "");
      typeArr =
        typeChoice.replace(",", "").length > 1
          ? typeChoice.split(",")
          : [typeChoice.toString()];
    } while (
      typeArr.indexOf("1") === -1 &&
      typeArr.indexOf("2") === -1 &&
      typeArr.indexOf("3") === -1 &&
      typeArr.indexOf("4") === -1
    );

  for (i = 0; i < typeArr.length; i++) {
    index = typeArr[i] - 1;
    chars += charArr[index];
  }

  window.alert(`Eligible Password Characters: ${chars}`);

  for (i = 0; i < pwLen; i++) {
    let charInd = Math.floor(Math.random() * chars.length);
    password += chars[charInd];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
