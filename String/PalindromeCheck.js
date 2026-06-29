/////         How do you check if a given string is a  palindrome ?

///// A **palindrome** is a word or sentence that reads the **same backward as forward**,
// like: `"madam"`, `"racecar"`, `"abba"`

//// input - "madam" | output - true;
//// input - "hello" | output - false;

//// 3 Approches

//// 1. Two-Pointer Technique (Best for Interviews)

function CheckPalindrom(str) {
  let left = 0;
  let right = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[left] !== str[right]) {
      return false;
    }
  }
  return true;
}

console.log('CheckPalindrom with Two-Pointer Technique',CheckPalindrom("madam"));
console.log('CheckPalindrom with Two-Pointer Technique',CheckPalindrom("hello"));

//// 2. Case-Insensitive and Space-Ignoring Version;
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log('check palindrome with Case-Insensitive',isPalindrome("madam"));
console.log('check palindrome with Case-Insensitive',isPalindrome("hollo"));

/// 3. Manual Reverse and Compare
function isPalindromeWithLoop(str){
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
     reversed += str[i]
  }
  return reversed === str
}
console.log('isPalindrome check with Loop', isPalindromeWithLoop('madam'));
console.log('isPalindrome check with Loop', isPalindromeWithLoop('hollo'));



