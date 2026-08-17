class BankAccount {
    #Balance;
    #Transation = []
    constructor(owner, initialBalance = 0) {
         this.owner = owner;
         this.#Balance = initialBalance
    }
}
