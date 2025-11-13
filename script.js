function generatePassword() {
  var passwordCriteria = {
    passwordLength: 8,
    passwordLowerCase: false,
    passwordUpperCase: false,
    passwordNumeric: false,
    passwordSpecialChar: false,
  };

  function askLength() {
    var lengthResponse = prompt('What length do you want the password to be?');

    if (lengthResponse >= 8 && lengthResponse <= 128) {
      passwordCriteria.passwordLength = lengthResponse;
    } else {
      window.alert('Password must be between 8 and 128 digits!');
      askLength();
    }
  }
  askLength();

  function askCharacters() {
    var lowerCaseResponse = confirm(
      'Do you want to include lower case letters?'
    );
    var upperCaseResponse = confirm(
      'Do you want to include upper case letters?'
    );
    var numericResponse = confirm('Do you want to include numbers?');
    var specialCharResponse = confirm(
      'Do you want to include special characters?'
    );

    if (lowerCaseResponse) {
      passwordCriteria.passwordLowerCase = true;
    }
    if (upperCaseResponse) {
      passwordCriteria.passwordUpperCase = true;
    }
    if (numericResponse) {
      passwordCriteria.passwordNumeric = true;
    }
    if (specialCharResponse) {
      passwordCriteria.passwordSpecialChar = true;
    }

    if (
      !lowerCaseResponse &&
      !upperCaseResponse &&
      !numericResponse &&
      !specialCharResponse
    ) {
      window.alert('Must choose atleast one character type!');
      askCharacters();
    }
  }

  askCharacters();
  console.log(passwordCriteria);

  var password = '';
  var possibleChars = '';

  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?/';

  if (passwordCriteria.passwordLowerCase) {
    possibleChars += lowerCaseChars;
  }
  if (passwordCriteria.passwordUpperCase) {
    possibleChars += upperCaseChars;
  }
  if (passwordCriteria.passwordNumeric) {
    possibleChars += numericChars;
  }
  if (passwordCriteria.passwordSpecialChar) {
    possibleChars += specialChars;
  }

  for (var i = 0; i < passwordCriteria.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }

  console.log('Generated Password:', password);
  return password;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
