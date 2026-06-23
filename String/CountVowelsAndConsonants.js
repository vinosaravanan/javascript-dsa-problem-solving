/////      How do you count the number of vowels and consonants in a  given string?

//// inputStr - programming;
//// vowels - (3) - o, a, i
//// Consonants - (8) -  p, r, g, r, m, m, n, g

//// 3 approches

/////  1, Brute Force Technique
function countVowelsAndConsonants(str) {
    let vowels = 0, consonants = 0;
    const lowerStr = str.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        if (char >= 'a' && char <= 'z') {
            if (
                char === 'a' ||
                char === 'e' ||
                char === 'i' ||
                char === 'o' ||
                char === 'u'
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

console.log('Brute Force Technique', countVowelsAndConsonants('programming'))

//// 2, Set + for...of Loop (Recommended for job)
function countVowelsAndConsonants(str) {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowels = 0, consonants = 0;

    for (const char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            vowelsSet.has(char) ? vowels++ : consonants++;
        }
    }

    return { vowels, consonants };
}

console.log('with set + for Loop',countVowelsAndConsonants('programming'));
