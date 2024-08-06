import { mealContains } from '../ingredients/mealContains.mjs';
import { calculatePrice } from './calculatePrice.mjs';
import { getIngredientDetails } from './getIngredientDetails.mjs';

export function combinePriceForMeal(meal) {
  return meal.contains.reduce((total, item) => {
    const ingredient = getIngredientDetails(item.ingredient);
    if (ingredient) {
      const price = calculatePrice(ingredient, item.weight);
      total += price;
    } else {
      const subMeal = mealContains.find((meal) => meal.name === item.ingredient);
      if (subMeal) {
        total += combinePriceForMeal(subMeal);
      } else {
        console.error(`Ingredient or meal not found: ${item.ingredient}`);
      }
    }
    return total;
  }, 0);
}
