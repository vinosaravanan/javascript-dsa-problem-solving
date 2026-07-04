////        Remove Duplicates from a String (In-Place)

//// Since true in-place string mutation isn't possible in JS, the standard approach is to:

//// Convert the string into an array of characters (arrays are mutable).
//// Modify the array in-place (using a write pointer technique).
//// Join the array back into a string at the end.

/// with set method
function removeDuplicatesWithSet(str) {
  const chars = str.split('');   
  const seen = new Set();
  let writeIndex = 0;          

  for (let readIndex = 0; readIndex < chars.length; readIndex++) {
    const char = chars[readIndex];
    if (!seen.has(char)) {
      seen.add(char);
      chars[writeIndex] = char;  
      writeIndex++;
    }
  }

  chars.length = writeIndex;     
  return chars.join('');
}

console.log('removeDuplicatesWith-Set-Method |',removeDuplicatesWithSet("aabbccddeeff")); // "abcdef"
console.log('removeDuplicatesWith-Set-Method |',removeDuplicatesWithSet("programming"));  // "progamin"
console.log('removeDuplicatesWith-Set-Method |', removeDuplicatesWithSet("mississippi"));  // "misp"

/// withod set method
function removeDuplicatesNoExtraSpacewithodSet(str) {
  const chars = str.split('');
  let writeIndex = 1;

  for (let i = 1; i < chars.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < writeIndex; j++) {
      if (chars[j] === chars[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      chars[writeIndex] = chars[i];
      writeIndex++;
    }
  }

  chars.length = writeIndex;
  return chars.join('');
}

console.log('removeDuplicates-NoExtraSpace-withodSet |', removeDuplicatesNoExtraSpacewithodSet('aabbccddeeff'));

