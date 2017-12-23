
function choose(choices) {
	const choice = Math.floor((Math.random() * choices.length));
	return choices[choice];
}

module.exports = {
	'choose': choose,
	'choice': choose,
}