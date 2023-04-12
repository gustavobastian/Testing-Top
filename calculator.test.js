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

test('divide two numbers-1', () => {
  expect(myCalculator.divide(2,1)).toBe(2);
});
test('divide two numbers-2', () => {
  expect(myCalculator.divide(9,3)).toBe(3);
});
test('divide two numbers-3', () => {
  expect(myCalculator.divide(128,2)).toBe(64);
});
test('divide two numbers-3', () => {
  expect(myCalculator.divide(300,0)).toBe("ERROR");
});

test('multiply two numbers-1', () => {
  expect(myCalculator.multiply(2,1)).toBe(2);
});
test('multiply two numbers-2', () => {
  expect(myCalculator.multiply(9,2)).toBe(18);
});
test('multiply two numbers-3', () => {
  expect(myCalculator.multiply(9,-2)).toBe(-18);
});
test('multiply two numbers-4', () => {
  expect(myCalculator.multiply(9,0)).toBe(0);
});