import sum from './sum';
import { expect, it } from 'vitest';

it('sum(2,4,6,8,12,101)=133', () => {
  const total = sum(2, 4, 6, 8, 12, 101);
  expect(total).toBe(133);
});
