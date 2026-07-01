////           Remove vowels?
//// this are vowels - 'a, e, i, o, u'

/// input - 'hello'
/// output - 'hll'

// 1.Brute Force Approach (Loop + Check)
function RemoveVowels(str) {
  let vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log("Remove Vowels |", RemoveVowels("hello"));

// 2. With Set and Array (Interview  Recommended)
function RemoveVowelsWithSetandArray(str) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let result = [];
    for (const char of str) {
        if (!vowels.has(char)) {
            result.push(char)
        }
    }
    return result.join('')
}
console.log('RemoveVowelsWith-Set-and-Array |', RemoveVowelsWithSetandArray('hello'));
