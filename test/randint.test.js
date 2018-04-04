const random = require('../src/index');

test('randint generates a number in range', () => {
    [
        [1,2],
        [1,6],
        [1,10],
        [1,12],
        [2,24],
    ].forEach(([a, b]) => {
        const i = random.randint(a, b)
        expect(i).toBeLessThanOrEqual(b);
        expect(i).toBeGreaterThanOrEqual(a);
    });
});
