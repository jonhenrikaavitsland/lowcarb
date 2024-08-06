import { getAllMealDetails } from './getAllMealDetails.mjs';
import { getLowCarbMeals } from './getLowCarbMeals.mjs';

export function getMealsByCategory(category, lowCarb = false) {
  const meals = lowCarb ? getLowCarbMeals() : getAllMealDetails();
  const filteredMeals = meals.filter((meal) => meal.category === category);
  return filteredMeals;
  // const allMeals = getAllMealDetails();
  // const filteredMeals = allMeals.filter((meal) => meal.category === category);
  // return filteredMeals;
}
