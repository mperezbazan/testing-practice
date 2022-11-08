const reverseString = require('./reverseString');

test('Reverse Martin equal nitraM', () => {
  expect(reverseString('Martin')).toBe('nitraM');
})
test('Length for mother equal rehtom', () => {
  expect(reverseString('mother')).toBe('rehtom');
})
test('Length for "We are the champions" equal error', () => {
  expect(reverseString('We are the champions')).toBe('snoipmahc eht era eW');
})