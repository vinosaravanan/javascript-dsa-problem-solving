/////      This file Contain map method  problem and Answer


// 1. Convert names to uppercase
// const users = ["vinoth", "rahul", "kumar"];

// Expected
// ["VINOTH", "RAHUL", "KUMAR"]

function ConvertToUpperCase(names){
  let res = names.map((name) => name.toUpperCase())
  return res
}
console.log('ConvertToUpperCase |', ConvertToUpperCase(['vinoth', 'rahul', 'kumar']));


