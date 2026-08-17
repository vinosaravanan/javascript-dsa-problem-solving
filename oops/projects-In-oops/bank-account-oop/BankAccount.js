const Transaction = require('./Transaction');
class BankAccount {
    #Balance;
    #Transation;
    constructor(owner, initialBalance = 0) {
         this.accountNumber = Math.floor(Math.random() * 100000)
         this.owner = owner;
         this.#Balance = initialBalance;
         this.#Transation = []
    }

    Deposit(amount){
      if (amount <= 0) {
        throw new Error("deposit must be positive");
      }
      this.#Balance += amount;
      this.Transaction.push(new Transaction('deposit', amount, this.#Balance))
      return this.#Balance
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new Error("withdraw must be positive");
        }
        if (amount > this.#Balance) {
            throw new Error('inEfficient fund')
        }

        this.#Balance -= amount;
        this.#Transation.push(new Transaction('Withdraw', amount, this.#Balance));
        return this.#Balance
    }

}
