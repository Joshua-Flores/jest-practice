import { calculator } from '../functions/calculator';

test('Calculator adds numbers', () => {
  expect(calculator('add', 1, 2)).toBe(3);
});

test('Calculator subtracts numbers', () => {
  expect(calculator('subtract', 5, 1)).toBe(4);
});

test('Calculator multiplies numbers', () => {
  expect(calculator('multiply', 2, 3)).toBe(6);
});

test('Calculator divides numbers', () => {
  expect(calculator('divide', 4, 2)).toBe(2);
});
