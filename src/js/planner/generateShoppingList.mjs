import { addIngredientToShoppingList } from './addIngredientToShoppingList.mjs';

export function generateShoppingList(meals) {
  const shoppingList = [];

  meals.breakfast[0].ingredients.forEach((ingredient) => {
    addIngredientToShoppingList(shoppingList, ingredient);
  });

  meals.lunch[0].ingredients.forEach((ingredient) => {
    addIngredientToShoppingList(shoppingList, ingredient);
  });

  meals.dinner[0].ingredients.forEach((ingredient) => {
    addIngredientToShoppingList(shoppingList, ingredient);
  });

  return shoppingList.map((item) => ({
    ...item,
    weight: parseFloat(item.weight.toFixed(2)),
  }));
}
