
/////////           3 How do you check if two strings are anagrams of each other?
//What is an Anagram?
//Two strings are anagrams if:

//They have the same characters.
//Those characters have the same frequency.

//          "listen" and "silent" are anagrams.    /// these anagrams 
//          "triangle" and "integral" are anagrams.

//   hello" and "world" are not anagrams. // NOT anagrams;

/// totall 2 Approches

/////1, Frequency Counter (Using Objects or Maps)

  function areAnagramWithObject(str1, str2) {

    const clean1 = str1.replace(/\s+/g, '').toLowerCase();
    const clean2 = str2.replace(/\s+/g, '').toLowerCase();

    if (str1.length !== str2.length) return false;

    const count = {};

    for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (const char of str2) {
        if (!count[char]) return false; 
        count[char]--;
    }

    return true;
}

console.log('are Anagrams With Object', areAnagramWithObject('listen', 'silent'));
console.log('are Anagrams With Object', areAnagramWithObject('hollo', 'world'));

