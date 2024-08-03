import { getAllMealDetails } from './getAllMealDetails.mjs';

export function getMealsByCategory(category) {
  const allMeals = getAllMealDetails();
  const filteredMeals = allMeals.filter((meal) => meal.category === category);
  return filteredMeals;
}
