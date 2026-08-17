class Transaction {
    constructor(type, amount, balanceAfter) {
        this.id = Math.floor(Math.random() * 100000);
        this.type = type;
        this.data = new Date();
        this.amount = amount;
        this.balanceAfter = balanceAfter;
    }
}

module.exports = Transaction