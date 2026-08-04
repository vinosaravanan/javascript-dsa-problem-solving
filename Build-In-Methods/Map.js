/////      This file Contain map method  problem and Answer


///////// 1. Convert names to uppercase
// const users = ["vinoth", "rahul", "kumar"];

// Expected
// ["VINOTH", "RAHUL", "KUMAR"]

function ConvertToUpperCase(names){
  let res = names.map((name) => name.toUpperCase())
  return res
}
console.log('ConvertToUpperCase |', ConvertToUpperCase(['vinoth', 'rahul', 'kumar']));


////////////// 2. Add GST (18%)
////  const prices = [100, 250, 500];

///// Expected
//// [118, 295, 590]

function AddGstToPrice(price){
    let res = price.map((price) => price * (1 + 18/100))
    return res
}
console.log('AddGstToPrice |',AddGstToPrice([100, 250, 500]));

/////////////  3. Add IDs
/// const products = [{ name: "Laptop" },{ name: "Mouse" },{ name: "Keyboard" }];

//Expected
//[{ id: 1, name: "Laptop" }, { id: 2, name: "Mouse" },{ id: 3, name: "Keyboard" }]

function AddIDsInObj(products){
  let res = products.map((product, i) => {
      let id = Math.floor(Math.random() * 10)
       return {id, ...product}
  })
  return res
}
console.log('AddIDsInObj |', AddIDsInObj([{ name: "Laptop" },{ name: "Mouse" },{ name: "Keyboard" }]));

/////////////  4. Full Name
/// const users = [{ first: "John", last: "Doe" },{ first: "Jane", last: "Smith" }];

//// Expected
/// ["John Doe","Jane Smith"]

function FullName(users){
  let res = users.map((user) => {
    const {first, last} = user
    return [first, last].join(' ')
  })
  return res
}
console.log(' FullName |', FullName([{ first: "John", last: "Doe" },{ first: "Jane", last: "Smith" }]));

//////////    5. Add "isAvailable"
//   const products = [{ name: "Phone", stock: 10 },{ name: "TV", stock: 0 }];
/// Expected
//[{name: "Phone",stock: 10,isAvailable: true},{name: "TV",stock: 0,isAvailable: false}]

function IsAvailable(products){
  let res = products.map((product, i) => {
     if (product.stock >= 1) {
         product.isAvailable = true
     } else {
         product.isAvailable = false
     }
     return product
  })
  return res
}
console.log('IsAvailable', IsAvailable([{ name: "Phone", stock: 10 },{ name: "TV", stock: 0 }]));


//////        6. Extract Emails
///  const users = [{ name: "John", email: "john@gmail.com" },{ name: "Sara", email: "sara@gmail.com" }];
///  Expected
/// ["john@gmail.com","sara@gmail.com"]

function ExtractEmails(users){
  let res = users.map((user) => user.email)
  return res
}
console.log('xtractEmails |', ExtractEmails([{ name: "John", email: "john@gmail.com" },{ name: "Sara", email: "sara@gmail.com" }]));

////////////   7. Add Discount Price
//// const products = [{ name: "Laptop", price: 60000 },{ name: "Phone", price: 30000 }];
////// Expected
//// [{name: "Laptop",price: 60000,discountPrice: 54000},{name: "Phone",price: 30000,discountPrice: 27000}]

function AddDiscountInObj(products){
  let res = products.map((product) => {
    let discountPrice = product.price * (1 - 20 / 100)
     return {...product, discountPrice}
  })
return res
}
console.log('AddDiscountInObj |', AddDiscountInObj([{ name: "Laptop", price: 60000 },{ name: "Phone", price: 30000 }]));
