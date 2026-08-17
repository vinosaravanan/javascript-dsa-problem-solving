class Customer {
    constructor(name, email) {
        this.id = Math.floor(Math.random() * 10000)
        this.name = name
        this.email = email
    }
}

module.exports = Customer;