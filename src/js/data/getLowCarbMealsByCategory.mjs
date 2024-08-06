import { getLowCarbMeals } from './getLowCarbMeals.mjs';

export function getLowCarbMealsByCategory(category) {
  const lowCarbMeals = getLowCarbMeals();
  return lowCarbMeals.filter((meal) => meal.category === category);
}
