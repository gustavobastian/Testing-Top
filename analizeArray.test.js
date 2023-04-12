const analizeArray = require('./analizeArray');

test('testing with an array', () => {
  let objectLocal=analizeArray([1,2,3,4]);
  expect(objectLocal.average).toBe(3);
  expect(objectLocal.min).toBe(2);
  expect(objectLocal.max).toBe(3);
  expect(objectLocal.average).toBe(7);
});