const capitalize = require('./capitalize');

test('capitalize a string', () => {
  expect(capitalize("help")).toBe("Help");
});

test('capitalize a line', () => {
    expect(capitalize("help me with this.")).toBe("Help me with this.");
  });

test('Error with parameter being a number', () => {
    expect(capitalize("123")).toBe("ERROR");
  });  

test('Error with parameter being a number', () => {
    expect(capitalize("12.3")).toBe("ERROR");
  });    