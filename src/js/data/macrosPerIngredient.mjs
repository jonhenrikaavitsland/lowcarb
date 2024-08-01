export function macrosPerIngredient(ingredient) {
  const macrosPerIngredient = {
    kcal: parseFloat(((ingredient.macros.kcal / 100) * ingredient.gramPiece).toFixed(2)),
    protein: parseFloat(((ingredient.macros.protein / 100) * ingredient.gramPiece).toFixed(2)),
    fats: parseFloat(((ingredient.macros.fats / 100) * ingredient.gramPiece).toFixed(2)),
    carbohydrates: parseFloat(((ingredient.macros.carbohydrates / 100) * ingredient.gramPiece).toFixed(2)),
  };
  return macrosPerIngredient;
}
