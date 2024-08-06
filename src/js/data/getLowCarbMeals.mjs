import { getAllMealDetails } from './getAllMealDetails.mjs';

export function getLowCarbMeals() {
  const allMeals = getAllMealDetails();
  const lowCarbMeals = allMeals.filter((meal) => meal.isLowCarb);
  return lowCarbMeals;
}
