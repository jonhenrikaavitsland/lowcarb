import { findIngredientData } from './findIngredientData.mjs';
import { mealContains } from '../ingredients/mealContains.mjs';
import { calculateMacrosAndPrice } from './calculateMacrosAndPrice.mjs';

export function assembleSalad() {
  const saladMeal = mealContains.find((meal) => meal.name === 'mixed salad');

  if (!saladMeal) {
    throw new Error('Mixed salad recipe not found.');
  }

  let totalMacros = {
    kcal: 0,
    protein: 0,
    fats: 0,
    carbohydrates: 0,
  };

  let totalPrice = 0;
  let ingredientsArray = [];

  for (let item of saladMeal.contains) {
    const ingredientData = findIngredientData(item.ingredient);

    if (!ingredientData) {
      throw new Error(`Ingredient with name ${item.ingredient} not found`);
    }

    const { price, macros } = calculateMacrosAndPrice(ingredientData, item.weight);

    totalMacros.kcal += macros.kcal;
    totalMacros.protein += macros.protein;
    totalMacros.fats += macros.fats;
    totalMacros.carbohydrates += macros.carbohydrates;
    totalPrice += price;

    ingredientsArray.push({
      name: item.ingredient,
      weight: item.weight,
      macros: {
        kcal: parseFloat(macros.kcal.toFixed(2)),
        protein: parseFloat(macros.protein.toFixed(2)),
        fats: parseFloat(macros.fats.toFixed(2)),
        carbohydrates: parseFloat(macros.carbohydrates.toFixed(2)),
      },
    });
  }

  totalMacros.kcal = parseFloat(totalMacros.kcal.toFixed(2));
  totalMacros.protein = parseFloat(totalMacros.protein.toFixed(2));
  totalMacros.fats = parseFloat(totalMacros.fats.toFixed(2));
  totalMacros.carbohydrates = parseFloat(totalMacros.carbohydrates.toFixed(2));
  totalPrice = parseFloat(totalPrice.toFixed(2));

  return { totalMacros, totalPrice, ingredients: ingredientsArray };
}
