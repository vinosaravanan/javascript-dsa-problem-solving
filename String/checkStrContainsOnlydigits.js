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
