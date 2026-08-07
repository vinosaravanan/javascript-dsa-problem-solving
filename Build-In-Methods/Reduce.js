/////  /////      This File Contain map method  problem and Answer

//////  1. Calculate Total Cart Price
////  const cart = [{ name: "Laptop", price: 50000, qty: 2 }, { name: "Mouse", price: 1000, qty: 3 }, { name: "Keyboard", price: 2500, qty: 1 }];
/// Output 106500

function CalculateTotalPrice(cart){
  let res = cart.reduce((acc, item) => {
     return acc + (item.price * item.qty)
  }, 0)
  return res
}
console.log('CalculateTotalPrice |', CalculateTotalPrice([{ name: "Laptop", price: 50000, qty: 2 }, { name: "Mouse", price: 1000, qty: 3 }, { name: "Keyboard", price: 2500, qty: 1 }]));

//////  2. Count Total Quantity
///  [{ item: "Apple", qty: 3 },{ item: "Orange", qty: 4 },{ item: "Mango", qty: 2 }]
///  Output 9

function CountTotalQuantity(items){
  let res = items.reduce((acc, item) => {
     return acc + item.qty
  }, 0)
  return res
}
console.log('CountTotalQuantity |', CountTotalQuantity([{ item: "Apple", qty: 3 },{ item: "Orange", qty: 4 },{ item: "Mango", qty: 2 }]));

////   3. Find Most Expensive Product
// const products = [
//   { id: 1, name: "Mouse", price: 1500 },
//   { id: 2, name: "Keyboard", price: 3500 },
//   { id: 3, name: "Laptop", price: 50000 },
//   { id: 4, name: "Monitor", price: 15000 },
//   { id: 5, name: "Headphones", price: 2500 }
// ];
////// // Output {name: "Laptop", price: 50000}

function MostExpensiveProduct(products){
  let res = products.reduce((max, product) => {
      return product.price > max.price ? product : max
  }, products[0]);
  return res
}
console.log('MostExpensiveProduct |', MostExpensiveProduct([{ id: 1, name: "Mouse", price: 1500 },  { id: 2, name: "Keyboard", price: 3500 },  { id: 3, name: "Laptop", price: 50000 },{ id: 4, name: "Monitor", price: 15000 },{ id: 5, name: "Headphones", price: 2500 } ]));

/////  4. Group Students by Grade
/////// input
const Students = [
 {name:"John", grade:"A"},
 {name:"Mike", grade:"B"},
 {name:"Sara", grade:"A"},
 {name:"David", grade:"C"}
]
// ///// Output
// {
//  A:["John","Sara"],
//  B:["Mike"],
//  C:["David"]
// }

function GroupStudentsByGrade(Students){
   let res = Students.reduce((acc, student) => {
        let grade = student.grade;
        if (!acc[grade]) {
            acc[grade] = []
        }
        acc[grade].push(student.name);
        return acc
   }, {})
   return res
}
console.log('GroupStudentsByGrade |', GroupStudentsByGrade(Students));

//// / 5. Count Frequency of Words
/// ["apple","banana","apple","orange","banana","apple"]

// Output
// {
//  apple:3,
//  banana:2,
//  orange:1
// }

function CountFreqency(fruits){
  let res = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
  } , {})
  return res
}
console.log('CountFreqency |', CountFreqency(["apple","banana","apple","orange","banana","apple"]));
