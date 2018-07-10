const random = require('../src/index');

test('choices returns required number of choices', () => {
	const result = random.choices([1, 2, 3], choices=2);
	expect(result.length).toBe(2);
})