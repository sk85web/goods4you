import { it, expect, describe } from 'vitest';
import { discountCounter } from '../../utils/discountCounter';

describe('group', () => {
  it('should return correct value', () => {
    const price = 100;
    const discount = 20;
    const result = discountCounter(price, discount);
    expect(result).toBe(80);
  });

  it('should return value without discount', () => {
    const price = 100;
    const discount = 0;
    const result = discountCounter(price, discount);
    expect(result).toBe(100);
  });

  it('should return rounded value with 2 digits after point', () => {
    const price = 99.15;
    const discount = 15.13;
    const result = discountCounter(price, discount);
    expect(result).toBe(84.15);
  });
});
