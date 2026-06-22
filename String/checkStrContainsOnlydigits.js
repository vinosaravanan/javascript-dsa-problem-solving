/////      How do you check if a string contains only digits 
//// input - "123456"
/// output - true

/// 3 Approches

///  1. Using Regular Expression

function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}

console.log('Using Regular Expression',isOnlyDigits("123456"));
console.log('Using Regular Expression',isOnlyDigits("123456s"));

/// 2. Using for loop and charCodeAt

function isOnlyDigitsWithcharCodeAt(str) {
    if (str.length === 0) return false;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code < 48 || code > 57) {
            return false;
        }
    }
    return true;
}

console.log('Using for loop and charCodeAt',isOnlyDigitsWithcharCodeAt("123456"));
console.log('Using for loop and charCodeAt',isOnlyDigitsWithcharCodeAt("123456R"));

/// 3. Using Array.every()

function isOnlyDigits(str) {
    return str.length > 0 && str.split('').every(ch => ch >= '0' && ch <= '9');
}
console.log('Using Array.every method' ,isOnlyDigits("123456"));
console.log('Using Array.every method',isOnlyDigits("123456R"))

