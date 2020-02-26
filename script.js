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