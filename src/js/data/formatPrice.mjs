export function formatPrice(price) {
  return {
    cost: parseFloat(price.toFixed(2)),
    currency: 'nok',
  };
}
