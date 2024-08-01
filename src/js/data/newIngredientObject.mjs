export function newIngredientObject(ingredient, pricePer, macrosPerPiece) {
  const newIngredient = {
    name: ingredient.name,
    price: parseFloat(pricePer.toFixed(2)),
    currency: ingredient.price.currency,
    macros: macrosPerPiece,
  };
  return newIngredient;
}
