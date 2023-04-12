const caesarCipher = require('./caesarCipher');

test('cypher a string', () => {
  expect(caesarCipher("ABC",1)).toBe("BCD");
});

test('cypher a string', () => {
  expect(caesarCipher("ABZ",1)).toBe("BCA");
});

test('cypher a string', () => {
  expect(caesarCipher("abc",1)).toBe("bcd");
});
test('cypher a string', () => {
  expect(caesarCipher("abz",1)).toBe("bca");
});


test('cypher a line', () => {
  expect(caesarCipher("defend the east wall of the castle",1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test('cypher a line', () => {
  expect(caesarCipher("defend the east wall of the castle",5)).toBe("ijkjsi ymj jfxy bfqq tk ymj hfxyqj");
});