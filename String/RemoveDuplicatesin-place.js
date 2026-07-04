////        Remove Duplicates from a String (In-Place)

//// Since true in-place string mutation isn't possible in JS, the standard approach is to:

//// Convert the string into an array of characters (arrays are mutable).
//// Modify the array in-place (using a write pointer technique).
//// Join the array back into a string at the end.

/// with set mrthod
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
