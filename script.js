var specialcharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

var numericcharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordoptions() {
    var length = parseInt(prompt("how many characters do you want to enter"));

    if (length < 8) {
        alert("password must be greater than 8 character")
        return;
    }
    if (length > 128) {
        alert("password must be length than 128 characters")
        return;
    }

    var hasSpecialCharacters = confirm("Click OK to confirm specialcharacters");
    var hasNumericCharacters = confirm("Click OK to confirm Numericcharacters");
    var hasLowerAlphabeticCharacters = confirm("Click Ok to confirm loweralphabeticcharacters");
    var hasUpperAlphabeticCharacters = confirm("Click Ok to confirm upperalphabeticcharacters");

    if (
        hasSpecialCharacters === false &&
        hasUpperAlphabeticCharacters === false &&
        hasLowerAlphabeticCharacters === false &&
        hasNumericCharacters === false) {
        alert("enter any one of the character");
        return;
    }

    var passwordoptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerAlphabeticCharacters: hasLowerAlphabeticCharacters,
        hasUpperAlphabeticCharacters: hasUpperAlphabeticCharacters
    };
    return passwordoptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password as it's being concatenated
    var result = [];

    // Array to store types of characters to include in password
    var possibleCharacters = [];

    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];

    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }

    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }

    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }

    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    // Transform the result into a string and pass into writePassword
    return result.join('');
}