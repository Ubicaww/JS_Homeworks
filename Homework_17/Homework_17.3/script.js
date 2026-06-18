class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
   if (amount <= 0) return console.log("The deposit amount must be greater than zero!");
   this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) return console.log("The withdraw amount must be greater than zero!");
    this.#balance -= amount;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());