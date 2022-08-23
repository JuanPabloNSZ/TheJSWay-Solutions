// Write a program that creates an account object with the following characteristics:

let bankAccount = {
	// A name property set to "Alex".
	name: 'Alex',

	// A balance property set to 0.
	balance: 0,

	// A credit method adding the (positive or negative) value passed as an argument to the account balance.
	credit(num) {
		return (this.balance += num);
	},

	// A describe method returning the account description.
	describe() {
		return `Hello ${this.name}, your balance is: $${this.balance}`;
	},
};

// Use this object to show its description, crediting 250, debiting 80, then show its description again.
console.log(bankAccount.describe());
bankAccount.credit(250);
bankAccount.credit(-80);
console.log(bankAccount.describe());
