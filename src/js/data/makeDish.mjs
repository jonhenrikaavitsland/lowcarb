import { mealContains } from '../ingredients/mealContains.mjs';
import { assembleSalad } from './assembleSalad.mjs';
import { calculateMacrosAndPrice } from './calculateMacrosAndPrice.mjs';
import { findIngredientData } from './findIngredientData.mjs';

export function makeDish(mealName) {
  const meal = mealContains.find((meal) => meal.name === mealName);

  if (!meal) {
    throw new Error(`Meal with name ${mealName} not found.`);
  }

  const dish = {
    name: meal.name,
    ingredients: [],
    totalMacros: {
      kcal: 0,
      protein: 0,
      fats: 0,
      carbohydrates: 0,
    },
    totalPrice: 0,
  };

  for (let item of meal.contains) {
    if (item.ingredient === 'mixed salad') {
      const salad = assembleSalad();
      const weightRatio = item.weight / 392;

      for (let saladItem of salad.ingredients) {
        dish.ingredients.push({
          name: saladItem.name,
          weight: saladItem.weight * weightRatio,
          macros: {
            kcal: parseFloat((saladItem.macros.kcal * weightRatio).toFixed(2)),
            protein: parseFloat((saladItem.macros.protein * weightRatio).toFixed(2)),
            fats: parseFloat((saladItem.macros.fats * weightRatio).toFixed(2)),
            carbohydrates: parseFloat((saladItem.macros.carbohydrates * weightRatio).toFixed(2)),
          },
        });
      }

      dish.totalMacros.kcal += salad.totalMacros.kcal * weightRatio;
      dish.totalMacros.protein += salad.totalMacros.protein * weightRatio;
      dish.totalMacros.fats += salad.totalMacros.fats * weightRatio;
      dish.totalMacros.carbohydrates += salad.totalMacros.carbohydrates * weightRatio;
      dish.totalPrice += salad.totalPrice * weightRatio;
    } else {
      const ingredientData = findIngredientData(item.ingredient);

      if (!ingredientData) {
        throw new Error(`Ingredient with name ${item.ingredient} not found.`);
      }

      const { price, macros } = calculateMacrosAndPrice(ingredientData, item.weight);

      dish.ingredients.push({
        name: item.ingredient,
        weight: item.weight,
        macros: {
          kcal: parseFloat(macros.kcal.toFixed(2)),
          protein: parseFloat(macros.protein.toFixed(2)),
          fats: parseFloat(macros.fats.toFixed(2)),
          carbohydrates: parseFloat(macros.carbohydrates.toFixed(2)),
        },
      });

      dish.totalMacros.kcal += macros.kcal;
      dish.totalMacros.protein += macros.protein;
      dish.totalMacros.fats += macros.fats;
      dish.totalMacros.carbohydrates += macros.carbohydrates;
      dish.totalPrice += price;
    }
  }
  dish.totalMacros.kcal = parseFloat(dish.totalMacros.kcal.toFixed(2));
  dish.totalMacros.protein = parseFloat(dish.totalMacros.protein.toFixed(2));
  dish.totalMacros.fats = parseFloat(dish.totalMacros.fats.toFixed(2));
  dish.totalMacros.carbohydrates = parseFloat(dish.totalMacros.carbohydrates.toFixed(2));
  dish.totalPrice = parseFloat(dish.totalPrice.toFixed(2));

  return dish;
}
