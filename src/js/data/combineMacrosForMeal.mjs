import { mealContains } from '../ingredients/mealContains.mjs';
import { calculateMacros } from './calculateMacros.mjs';
import { getIngredientDetails } from './getIngredientDetails.mjs';

export function combineMacrosForMeal(meal) {
  return meal.contains.reduce(
    (totals, item) => {
      const ingredient = getIngredientDetails(item.ingredient);
      if (ingredient) {
        const macros = calculateMacros(ingredient, item.weight);
        totals.kcal += macros.kcal;
        totals.fats += macros.fats;
        totals.protein += macros.protein;
        totals.carbohydrates += macros.carbohydrates;
      } else {
        const subMeal = mealContains.find((meal) => meal.name === item.ingredient);
        if (subMeal) {
          const subMacros = combineMacrosForMeal(subMeal);
          totals.kcal += subMacros.kcal;
          totals.fats += subMacros.fats;
          totals.protein += subMacros.protein;
          totals.carbohydrates += subMacros.carbohydrates;
        } else {
          console.error(`Ingredient or meal not found: ${item.ingredient}`);
        }
      }
      return totals;
    },
    { kcal: 0, fats: 0, protein: 0, carbohydrates: 0 },
  );
}
