/////             Replace a character in a string?
//// input = "banana" | target = "a" | replaceChar = "x"

/// output = "bxnxnx"

/// 1, Brute Force Approach (Character by Character)
function ReplaceCharInStr(str, target, replaceChar) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            result += replaceChar
        } else {
            result += str[i]
        }
    }
    return result
}
console.log('ReplaceCharInStr-Brute-Force |', ReplaceCharInStr('banana', 'a', 'x'));

/// 2, Interview Recommended Approach (Array + Join)
function ReplaceCharInStrWithArr(str, target, replaceChar) {
   let result = [];
   for (const char of str) {
      result.push(char !== target ? char : replaceChar)
   }
  return result.join('')
}
console.log('ReplaceCharInStrWith-Array |', ReplaceCharInStrWithArr('banana', 'a', 'x'));
