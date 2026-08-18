////        Move all zeros to the end of the array?

//// input - [0,1,0,3,12]
//// output - [1, 3, 12, 0, 0]

/// Brute Force Approach

function MoveAllZerosToEnd(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            result.push(nums[i]) 
        }    
    }
    while (result.length < nums.length) {
        result.push(0)
    }
    result.length = nums.length
    return result
    
}
console.log('MoveAllZerosToEnd |', MoveAllZerosToEnd([0,1,0,3,12]));