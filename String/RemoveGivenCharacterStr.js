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

//  2. Optimized Loop Using Array + join()  Recommended for Interviews
function RemoveGivenCharacterwithArr(str, target) {
   let result = [];
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== target) {
          result.push(str[i])
      }
   }
   return result.join('')
}
console.log('RemoveGivenCharacterwith-Arr |', RemoveGivenCharacterwithArr("banana", 'a'));

// 3. Using split() + join() (One-liner Approach)
function RemoveGivenCharacterWithSplit(str, target) {
   return str.split(target).join('')
}
console.log('RemoveGivenCharacterWith-Split |', RemoveGivenCharacterWithSplit('banana', 'a'));
