import { calculateMacros } from './calculateMacros.mjs';
import { getIngredientDetails } from './getIngredientDetails.mjs';

export function aggregateMealMacros(meal) {
  const totalMacros = meal.contains.reduce(
    (total, item) => {
      const ingredient = getIngredientDetails(item.ingredient);
      if (ingredient) {
        const macros = calculateMacros(ingredient, item.weight);
        total.kcal += macros.kcal;
        total.fats += macros.fats;
        total.protein += macros.protein;
        total.carbohydrates += macros.carbohydrates;
      }
      return total;
    },
    { kcal: 0, fats: 0, protein: 0, carbohydrates: 0 },
  );
  return totalMacros;
}
