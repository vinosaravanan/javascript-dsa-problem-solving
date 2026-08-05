/////      This file Contain filter method  problem and Answer


////   1. Filter Even Numbers
// const numbers = [10, 15, 22, 31, 40, 55];
// Output: [10, 22, 40]

function FindEvenNumber(nums){
 let res = nums.filter((num) => {
     return num % 2 === 0
 })
return res
}
console.log('FindEvenNumber|', FindEvenNumber([10, 15, 22, 31, 40, 55]));

////   2. Filter Odd Numbers
//  const numbers = [2,5,8,11,14,17];
// Output: [5,11,17]

function FindOddNumber(nums){
    let res = nums.filter((num) => {
        return num % 2 === 1
    })
    return res
}
console.log('FindOddNumber |', FindOddNumber([2,5,8,11,14,17]));

/////  3. Filter Strings Longer Than 5 Characters
// const words = ["React","JavaScript","CSS","Redux","Node"];
// Output ["JavaScript"]

function FilterStr(words) {
let res = words.filter((word) => {
    return word && word.length > 5
})
return res
}
console.log('FilterStr |', FilterStr(["React","JavaScript","CSS","Redux","Node"]));

/////  4. Filter Positive Numbers
//  const nums = [-5,3,-10,8,0,15];
/// Output [3,8,15];

function FilterPositiveNumber(nums){
    let res = nums.filter((num) => num > 0)
    return res
}
console.log('FilterPositiveNumber |', FilterPositiveNumber([-5,3,-10,8,0,15]));

/////  5. Filter Products Under ₹1000
// const products = [{id:1,name:"Mouse",price:500}, {id:2,name:"Laptop",price:50000}, {id:3,name:"Keyboard",price:900}];
//  Output[{id:1,name:"Mouse",price:500},{id:3,name:"Keyboard",price:900}];

function ProductsFilter(products){
    let res = products.filter((product) => product.price < 1000);
    return res
}
console.log('ProductsFilter |', ProductsFilter([{id:1,name:"Mouse",price:500}, {id:2,name:"Laptop",price:50000}, {id:3,name:"Keyboard",price:900}]));
