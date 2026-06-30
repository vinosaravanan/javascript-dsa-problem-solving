/////          How do you remove a given character from a String ?

//// input - "banana", "a";
//// output - "bnn";


// 1. Brute Force (Using Loop + +=)
function RemoveGivenCharacterInStr(str, target) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
       if (str[i] !== target) {
          result += str[i]
       }
    }
    return result
}
console.log('emoveGivenCharacterInStr-Brute-force |', RemoveGivenCharacterInStr('banana', 'a'));



