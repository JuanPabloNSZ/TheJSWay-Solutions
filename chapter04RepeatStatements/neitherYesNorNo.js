// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let yesNorNo = function () {
	let userInput = window.prompt('Type Yes or No to continue');
	while (userInput.toLowerCase() != 'yes' && userInput.toLowerCase() != 'no') {
		userInput = window.prompt('Type Yes or No to continue');
	}
};
