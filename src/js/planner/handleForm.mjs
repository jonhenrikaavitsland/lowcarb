import { getAllMealDetails } from '../data/getAllMealDetails.mjs';
import { changeDays } from './changeDays.mjs';

export function handleForm() {
  const formElement = document.querySelector('form');
  const allMeals = getAllMealDetails();
  console.log('pre:', allMeals);
  changeDays();
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = [];

    const sections = document.querySelectorAll(`[data-planner="days"] section`);
    console.log(sections);

    sections.forEach((section, index) => {
      const breakfast = section.querySelector('#breakfast').textContent;
      const lunch = section.querySelector('#lunch').textContent;
      const dinner = section.querySelector('#dinner').textContent;
      const menu = {
        day: index + 1,
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner,
      };
      result.push(menu);
    });
    console.log(result);
    const mealplan = buildMealPlan(result, allMeals);
    console.log('plan:', mealplan);
  });
}

function buildMealPlan(daysData, mealsData) {
  const totalPlan = [];

  daysData.forEach((day) => {
    const dayIndex = day.day;
    const meals = [];

    ['breakfast', 'lunch', 'dinner'].forEach((mealType) => {
      const mealNames = day[mealType].split(/,\s*/); // Split meal names by comma and optional space
      mealNames.forEach((mealName) => {
        const meal = mealsData.find(name === mealName);
        if (meal) {
          meals.push(meal);
        }
      });
    });

    totalPlan.push({ day: dayIndex, meals });
  });
  console.log('PlanTest:', totalPlan);
  return totalPlan;
}
