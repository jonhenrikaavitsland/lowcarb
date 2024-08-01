export function pricePerIngredient(ingredient) {
  const pricePerIngredient = (ingredient.price.perKg / 1000) * ingredient.gramPiece;
  return pricePerIngredient;
}
