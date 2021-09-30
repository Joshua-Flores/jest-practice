import { capitalize, reverseString } from './stringFunctions';

test('Capitalizes first letter of a string', () => {
  expect(capitalize('string')).toMatch(/String/);
});

test('Reverses string', () => {
  expect(reverseString('string')).toMatch('gnirts');
});
