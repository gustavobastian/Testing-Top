const analizeArray = require('./analizeArray.js');

test('testing with an array', () => {
  let objectLocal=analizeArray([2,2,2,2]);
  expect(objectLocal.average).toBe(2);
  expect(objectLocal.min).toBe(2);
  expect(objectLocal.max).toBe(2);
  expect(objectLocal.length).toBe(4);
});

test('testing with an array', () => {
    let objectLocal=analizeArray([2,2,2,2,7]);
    expect(objectLocal.average).toBe(3);
    expect(objectLocal.min).toBe(2);
    expect(objectLocal.max).toBe(7);
    expect(objectLocal.length).toBe(5);
  });

  test('testing with an array', () => {
    let objectLocal=analizeArray([]);
    expect(objectLocal.average).toBe(0);
    expect(objectLocal.min).toBe(0);
    expect(objectLocal.max).toBe(0);
    expect(objectLocal.length).toBe(0);
  });