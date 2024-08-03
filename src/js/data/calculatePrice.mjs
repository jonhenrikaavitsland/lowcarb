export function calculatePrice(ingredient, weight) {
  const weightRatio = weight / 1000;
  const price = ingredient.price.perKg * weightRatio;
  return price;
}
