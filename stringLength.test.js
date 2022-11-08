const stringLength = require("./stringLength.js");

test('Length for Martin equal 6', () => {
  expect(stringLength('Martin')).toBe(6);
})
test('Length for "" equal error', () => {
  expect(stringLength('')).toBe('Error');
})
test('Length for "We are the champions" equal error', () => {
  expect(stringLength('We are the champions')).toBe('Error');
})