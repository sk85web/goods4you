export const discountCounter = (price: number, discount: number) =>
  Number((price - (price * discount) / 100).toFixed(2));
