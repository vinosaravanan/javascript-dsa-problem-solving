///////   Largest three distinct elements in an array?

// This means:
// Given an array of integers, **find the top 3 largest unique values**, **not including duplicates**

/// input - [10, 4, 3, 50, 23, 90]
/// output - [90, 50, 23]

/// Brute Force (Beginner-Friendly)
function findTopThreeWithBruteForce(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }  
    unique.sort((a, b) => b - a)
    return unique.slice(0, 3)
}
console.log('findTopThreeWithBruteForce |', findTopThreeWithBruteForce([10, 4, 3, 50, 23, 90, 90]));
