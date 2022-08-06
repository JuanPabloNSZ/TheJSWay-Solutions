// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
values.reduce((a, b) => a + b, 0);

//* I took the time to implement a function in which the user can give another array of numbers
function userSum(num) {
	return num.reduce((a, b) => a + b, 0);
}
// Example:
userSum([3, 5, 88, 34]);
