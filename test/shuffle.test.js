const test = require('ava');

const random = require('../src/index');

test('shuffle retains the original elements of the array', (t) => {
	const choices = ["orange", "lime", "melon"];
	const shuffledChoices = random.shuffle(choices);
	for(item of shuffledChoices) {
		t.true(choices.includes(item));
	}
	t.is(choices.length, shuffledChoices.length);
});

