const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString("help")).toBe("pleh");
});


test('reverse a line', () => {
    expect(reverseString("help me with this.")).toBe(".siht htiw em pleh");
  });
  