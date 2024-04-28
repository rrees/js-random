//@ts-check

function choose(choices) {
	const choice = Math.floor((Math.random() * choices.length));
	return choices[choice];
}

function shuffle(choices) {
	const shuffledChoices = Array.of(...choices);

	let pick = 0;
	let temp = undefined;

	for (let i = 0; i < shuffledChoices.length - 1; i++) {
		pick = Math.floor((Math.random() * shuffledChoices.length));
		temp = shuffledChoices[pick]
		shuffledChoices[pick] = shuffledChoices[i]
		shuffledChoices[i] = temp;
	}

	return shuffledChoices;
}

function randint(a, b) {
	return a + Math.floor(Math.random() * (b - a));
}

/**
* Selects a number of members from the data passed to it and returns them.
* 
* Does not modify the input collection
* 
* If the required choices is larger than the input then all the options will be returned
* 
* @param {array[any]} data - the 
* @param {number} choices - the number of selections to make
* @param {boolean} replacement
* 
* @returns {array[any]}
*/
function choices(data, choices, replacement=true) {
	const results= [];

	const availableChoices = shuffle(Array.from(data));

	if(availableChoices.length < choices) {
		return availableChoices;
	}

	while(availableChoices.length > 0 && results.length < choices) {
		const pick = replacement ? choose(data) : availableChoices.pop();
		results.push(pick);
	}

	return results;
}

module.exports = {
	choose,
	'choice': choose,
	shuffle,
	choices,
	randint,
}