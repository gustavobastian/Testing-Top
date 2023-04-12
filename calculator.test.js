const calculator = require('./calculator');

let myCalculator= new calculator();

test('add two numbers', () => {
  expect(myCalculator.add(1,2)).toBe(3);
});

test('add two numbers-2', () => {
  expect(myCalculator.add(3,4)).toBe(7);
});

test('add two numbers-3', () => {
  expect(myCalculator.add(0,0)).toBe(0);
});


test('add two numbers-4', () => {
  expect(myCalculator.add(-1,-3)).toBe(-4);
});

test('substrac two numbers-1', () => {
  expect(myCalculator.substract(7,3)).toBe(4);
});
test('substrac two numbers-2', () => {
  expect(myCalculator.substract(2,1)).toBe(1);
});