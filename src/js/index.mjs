import { breakfasts, dinner, lunch } from './menu/menu.mjs';
import { listMenuOptions } from './planner/listMenuOptions.mjs';
import { planDay } from './planner/planDay.mjs';
import { planMultipleDays } from './planner/planMultipleDays.mjs';

console.log('BREAKFASTS:');
console.log(breakfasts);

console.log('LUNCH:');
console.log(lunch);

console.log('DINNER:');
console.log(dinner);

const dayPlan = planDay('omelette w/ almonds on the side', 'salmon w/ asparagus beans, avocado, salad on the side', 'pork chops w/ brussels sprouts, sweet potato on the side');
console.log('day:', dayPlan);

const menuOptions = listMenuOptions();
console.log('Breakfast options:', menuOptions.breakfasts);
console.log('Lunch options:', menuOptions.lunch);
console.log('Dinner options:', menuOptions.dinner);

const days = [
  { breakfast: 'omelette w/ almonds on the side', lunch: 'salmon w/ asparagus beans, avocado, salad on the side', dinner: 'pork chops w/ brussels sprouts, sweet potato on the side' },
  { breakfast: 'salmon filet w/ almonds on the side', lunch: 'omelette w/ broccoli, avocado, salad on the side', dinner: 'chicken w/ asparagus beans, sweet potato on the side' },
  { breakfast: 'omelette w/ almonds on the side', lunch: 'neck chops w/ broccoli, avocado, salad on the side', dinner: 'chicken w/ asparagus beans, sweet potato on the side' },
  { breakfast: 'omelette w/ almonds on the side', lunch: 'chicken w/ asparagus beans, avocado, salad on the side', dinner: 'chicken w/ asparagus beans, sweet potato on the side' },
  // Add more days as needed
];

const multiDayPlan = planMultipleDays(days);
multiDayPlan.dayPlans.forEach((dayPlan, index) => {
  console.log(`Day ${index + 1} Macros:`, dayPlan.totalMacros);
  console.log(`Day ${index + 1} Price: NOK`, dayPlan.totalPrice);
});

console.log('Total Macros:', multiDayPlan.totalMacros);
console.log('Total Price: NOK', multiDayPlan.totalPrice);
console.log('Total Shopping List:', multiDayPlan.totalShoppingList);
