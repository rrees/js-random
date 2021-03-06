
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

function choices(data, choices, replacement=true) {
	const results= [];

	const availableChoices = shuffle(Array.from(data));

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