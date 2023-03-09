const test = require('ava');

const random = require('../src/index');

test('choose chooses an element within the array', (t) => {
	const choices = ["orange", "lime", "melon"];
	t.true(choices.includes(random.choose(choices)));
});

