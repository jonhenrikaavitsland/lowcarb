import { mealContains } from '../ingredients/mealContains.mjs';

export function getMealById(id) {
  return mealContains.find((meal) => meal.id === id);
}
