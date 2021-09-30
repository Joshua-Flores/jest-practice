import { arrayAnalysis } from '../functions/arrayAnalysis';

test('Display average of an array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Display min of an array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Display max of an array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Display length of an array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
