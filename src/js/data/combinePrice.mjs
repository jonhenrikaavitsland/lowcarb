import { combinePriceForMeal } from './combinePriceForMeal.mjs';

export function combinePrice(meals) {
  return meals.reduce((total, meal) => {
    total += combinePriceForMeal(meal.meal);
    return total;
  }, 0);
}
