/////      This file Contain filter method  problem and Answer

// const numbers = [10, 15, 22, 31, 40, 55];

// Output: [10, 22, 40]

function FindEvenNumber(nums){
 let res = nums.filter((num) => {
     return num % 2 === 0
 })
return res
}
console.log('FindEvenNumber|', FindEvenNumber([10, 15, 22, 31, 40, 55]));
