// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
values.sort((a, b) => a - b);
values[values.length - 1];

//* I took the time to implement a function in which the user can give another array of numbers
function maxValue(num) {
	num.sort((a, b) => a - b);
	return num[num.length - 1];
}
