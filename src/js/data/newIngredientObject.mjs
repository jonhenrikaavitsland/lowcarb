export function newIngredientObject(ingredient, pricePer, macrosPerPiece, multiplier) {
  const newIngredient = {
    name: ingredient.name,
    price: parseFloat((pricePer * multiplier).toFixed(2)),
    currency: ingredient.price.currency,
    macros: macrosPerPiece * multiplier,
  };
  return newIngredient;
}
