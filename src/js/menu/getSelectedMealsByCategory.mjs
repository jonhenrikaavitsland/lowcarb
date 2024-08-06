import { getMealById } from '../data/getMealById.mjs';

export function getSelectedMeals() {
  const day = document.querySelector('#day').value;
  const breakfastId = document.querySelector('#breakfast').value;
  const lunchId = document.querySelector('#lunch').value;
  const dinnerId = document.querySelector('#dinner').value;

  const selectedMeals = [];

  if (breakfastId) {
    const breakfast = getMealById(parseInt(breakfastId, 10));
    if (breakfast) {
      selectedMeals.push({ day: parseInt(day, 10), meal: breakfast });
    }
  }

  if (lunchId) {
    const lunch = getMealById(parseInt(lunchId, 10));
    if (lunch) {
      selectedMeals.push({ day: parseInt(day, 10), meal: lunch });
    }
  }

  if (dinnerId) {
    const dinner = getMealById(parseInt(dinnerId, 10));
    if (dinner) {
      selectedMeals.push({ day: parseInt(day, 10), meal: dinner });
    }
  }

  return selectedMeals;
}
