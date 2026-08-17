const customer = require('./Customer')
const BankAccount = require('./BankAccount')


let vinoth = new customer('vinoth', 'gmail.com')

let vinothAccount = new BankAccount(vinoth, 2000)
vinothAccount.Deposit(500)
vinothAccount.Deposit(1000)
vinothAccount.withdraw(500)

// console.log(vinothAccount.getTransactionHistory());


// console.log(vinothAccount.getTransactionHistory());
vinothAccount.getTransactionHistory().forEach(t => console.log(t.data));
 