import { ingredients } from '../ingredients/ingredients.mjs';

export function getIngredientDetails(ingredientName) {
  for (let category in ingredients) {
    const ingredient = ingredients[category].find((item) => item.name === ingredientName);

    if (ingredient) {
      return ingredient;
    }
  }
  return null;
}
