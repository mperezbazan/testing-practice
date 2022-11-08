const capitalize = require ('./capitalize')
test('Capitalize martin', () => {
  expect(capitalize('martin')).toBe('Martin');
});