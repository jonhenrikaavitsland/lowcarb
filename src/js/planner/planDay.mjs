import { breakfasts, lunch, dinner } from '../menu/menu.mjs';
import { generateShoppingList } from './generateShoppingList.mjs';
import { getMealByName } from './getMealByName.mjs';

export function planDay(breakfastOption, lunchOption, dinnerOption) {
  const breakfastDish = getMealByName(breakfasts, breakfastOption);
  const lunchDish = getMealByName(lunch, lunchOption);
  const dinnerDish = getMealByName(dinner, dinnerOption);

  if (!breakfastDish || !lunchDish || !dinnerDish) {
    throw new Error('One or more meals not found.');
  }

  const totalMacros = {
    kcal: breakfastDish.totalMacros.kcal + lunchDish.totalMacros.kcal + dinnerDish.totalMacros.kcal,
    protein: breakfastDish.totalMacros.protein + lunchDish.totalMacros.protein + dinnerDish.totalMacros.protein,
    fats: breakfastDish.totalMacros.fats + lunchDish.totalMacros.fats + dinnerDish.totalMacros.fats,
    carbohydrates: breakfastDish.totalMacros.carbohydrates + lunchDish.totalMacros.carbohydrates + dinnerDish.totalMacros.carbohydrates,
  };

  const totalPrice = breakfastDish.totalPrice + lunchDish.totalPrice + dinnerDish.totalPrice;

  const dayPlan = {
    meals: {
      breakfast: [breakfastDish],
      lunch: [lunchDish],
      dinner: [dinnerDish],
    },
    totalMacros: {
      kcal: parseFloat(totalMacros.kcal.toFixed(2)),
      protein: parseFloat(totalMacros.protein.toFixed(2)),
      fats: parseFloat(totalMacros.fats.toFixed(2)),
      carbohydrates: parseFloat(totalMacros.carbohydrates.toFixed(2)),
    },
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    shoppingList: generateShoppingList({
      breakfast: [breakfastDish],
      lunch: [lunchDish],
      dinner: [dinnerDish],
    }),
  };

  return dayPlan;
}
