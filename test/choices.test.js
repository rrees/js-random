const test = require('ava');

const random = require('../src/index');


test('choices returns required number of choices', (t) => {
	const result = random.choices([1, 2, 3], choices=2);
	t.is(result.length, 2);
});

test('choices without replacement does not contain duplicates', (t) => {
	const data = [1,2];

	const result = random.choices(data, choices=3, replacement=false);

	t.is(result.length, data.length);
	
	const resultAsSet = new Set(result);

	t.is(resultAsSet.size, 2);
});