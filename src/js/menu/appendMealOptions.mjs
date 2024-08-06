import { getLowCarbMealsByCategory } from '../data/getLowCarbMealsByCategory.mjs';

export function appendMealOptions(category, targetId) {
  const meals = getLowCarbMealsByCategory(category);
  const target = document.querySelector(targetId);

  if (target) {
    meals.forEach((meal) => {
      const option = document.createElement('option');
      option.value = meal.id;
      option.text = meal.name;
      target.appendChild(option);
    });
  }
}
