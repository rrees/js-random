const random = require('../src/index');

test('choose chooses an element within the array', () => {
	const choices = ["orange", "lime", "melon"];
	expect(random.choose(choices)).toBe("orange");
})