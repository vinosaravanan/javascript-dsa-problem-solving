/////      This file Contain map method  problem and Answer


//      1. Convert names to uppercase
// const users = ["vinoth", "rahul", "kumar"];

// Expected
// ["VINOTH", "RAHUL", "KUMAR"]

function ConvertToUpperCase(names){
  let res = names.map((name) => name.toUpperCase())
  return res
}
console.log('ConvertToUpperCase |', ConvertToUpperCase(['vinoth', 'rahul', 'kumar']));


/////       2. Add GST (18%)
////  const prices = [100, 250, 500];

///// Expected
//// [118, 295, 590]

function AddGstToPrice(price){
    let res = price.map((price) => price * (1 + 18/100))
    return res
}
console.log('AddGstToPrice |',AddGstToPrice([100, 250, 500]));


