// Check the following program that shows even numbers (divisible by 2) between 1 and 10.
<<<<<<< HEAD
=======

>>>>>>> 942fbc322a7edcd098b3f547696662e937246c59
for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	}
}

// Improve the program so that it also shows odd numbers.
for (let i = 1; i <= 10; i++) {
	i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

// Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!
function userNumber(num) {
	for (let i = num; i < num + 10; i++) {
		i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
	}
}
