import { ingredients } from '../ingredients/ingredients.mjs';

export function findIngredientData(ingredientName) {
  for (let category in ingredients) {
    for (let ingredient of ingredients[category]) {
      if (ingredient.name === ingredientName) {
        return ingredient;
      }
    }
  }
  return null;
}
