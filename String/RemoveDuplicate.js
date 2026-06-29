//////             how do remove the duplicate character from String?
////// input - 'abcabc' | output - 'abc'
/////  input - 'hello'  | output - 'Helo'

//// 4 approches


//// 1. Using Set (Fastest and Clean)

function RemoveDuplicateWithSet(str) {
    return [...new Set(str)].join('')
}
console.log('Using Set (Fastest and Clean) |', RemoveDuplicateWithSet('abcabc'));
