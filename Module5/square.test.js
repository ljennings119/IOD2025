const { square } = require('./square');


// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
test('square 5 to get 25', () => {
expect(square(5)).toBe(25);
});