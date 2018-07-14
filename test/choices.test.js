const random = require('../src/index');

test('choices returns required number of choices', () => {
	const result = random.choices([1, 2, 3], choices=2);
	expect(result.length).toBe(2);
});

test('choices without replacement does not contain duplicates', () => {
	const data = [1,2];

	const result = random.choices(data, choices=3, replacement=false);

	expect(result.length).toBe(data.length);
	
	const resultAsSet = new Set(result);

	expect(resultAsSet.size).toBe(2);
});