// TODO: create the dog object here
let dog = {
	name: 'Kevin',
	species: 'Harrier',
	size: '60cm',

	bark() {
		return 'Wooof';
	},
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
