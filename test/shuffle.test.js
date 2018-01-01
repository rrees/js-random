const random = require('../src/index');

test('shuffle retains the original elements of the array', () => {
	const choices = ["orange", "lime", "melon"];
	const shuffledChoices = random.shuffle(choices);
	for(item of shuffledChoices) {
		expect(choices).toContain(item);
	}
	expect(shuffledChoices.length).toEqual(choices.length);
});

