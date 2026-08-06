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
