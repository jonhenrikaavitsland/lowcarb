import { generateTotalShoppingList } from './generateTotalShoppingList.mjs';
import { planDay } from './planDay.mjs';

export function planMultipleDays(days) {
  const dayPlans = [];
  let totalMacros = { kcal: 0, protein: 0, fats: 0, carbohydrates: 0 };
  let totalPrice = 0;

  for (let i = 0; i < days.length; i++) {
    const dayPlan = planDay(days[i].breakfast, days[i].lunch, days[i].dinner);
    dayPlans.push(dayPlan);

    totalMacros.kcal += dayPlan.totalMacros.kcal;
    totalMacros.protein += dayPlan.totalMacros.protein;
    totalMacros.fats += dayPlan.totalMacros.fats;
    totalMacros.carbohydrates += dayPlan.totalMacros.carbohydrates;
    totalPrice += dayPlan.totalPrice;
  }

  const totalShoppingList = generateTotalShoppingList(dayPlans);

  return {
    dayPlans,
    totalMacros: {
      kcal: parseFloat(totalMacros.kcal.toFixed(2)),
      protein: parseFloat(totalMacros.protein.toFixed(2)),
      fats: parseFloat(totalMacros.fats.toFixed(2)),
      carbohydrates: parseFloat(totalMacros.carbohydrates.toFixed(2)),
    },
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    totalShoppingList,
  };
}
