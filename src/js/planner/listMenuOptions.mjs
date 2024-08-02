import { breakfasts, lunch, dinner } from '../menu/menu.mjs';

export function listMenuOptions() {
  const menuOptions = {
    breakfasts: breakfasts.map((meal, index) => ({ id: index + 1, name: meal.name })),
    lunch: lunch.map((meal, index) => ({ id: index + 1, name: meal.name })),
    dinner: dinner.map((meal, index) => ({ id: index + 1, name: meal.name })),
  };
  return menuOptions;
}
