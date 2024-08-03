import { processMeal } from './processMeal.mjs';
import { mealContains } from '../ingredients/mealContains.mjs';

export function getAllMealDetails() {
  const allMealDetails = mealContains.map(processMeal);
  return allMealDetails;
}
