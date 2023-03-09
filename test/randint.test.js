const test = require('ava');

const random = require('../src/index');

test('randint generates a number in range', (t) => {
    [
        [1,2],
        [1,6],
        [1,10],
        [1,12],
        [2,24],
    ].forEach(([a, b]) => {
        const i = random.randint(a, b)
        t.true(i <= b);
        t.true(i >= a);
    });
});
