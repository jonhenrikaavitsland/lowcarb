import { calculatePrice } from './calculatePrice.mjs';
import { getIngredientDetails } from './getIngredientDetails.mjs';

export function aggregateMealPrice(meal) {
  const totalPrice = meal.contains.reduce((total, item) => {
    const ingredient = getIngredientDetails(item.ingredient);
    if (ingredient) {
      total += calculatePrice(ingredient, item.weight);
    }
    return total;
  }, 0);
  return totalPrice;
}
