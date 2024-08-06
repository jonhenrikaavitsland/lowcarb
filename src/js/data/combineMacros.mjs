import { combineMacrosForMeal } from './combineMacrosForMeal.mjs';

export function combineMacros(meals) {
  return meals.reduce(
    (totals, meal) => {
      const macros = combineMacrosForMeal(meal.meal);
      totals.kcal += macros.kcal;
      totals.fats += macros.fats;
      totals.protein += macros.protein;
      totals.carbohydrates += macros.carbohydrates;
      return totals;
    },
    { kcal: 0, fats: 0, protein: 0, carbohydrates: 0 },
  );
}
