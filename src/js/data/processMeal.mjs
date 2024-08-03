import { aggregateMealMacros } from './aggregateMealMacros.mjs';
import { aggregateMealPrice } from './aggregateMealPrice.mjs';

export function processMeal(meal) {
  const mealIngredients = meal.contains.map((item) => ({
    name: item.ingredient,
    weight: item.weight,
  }));

  const totalMacros = aggregateMealMacros(meal);
  const totalPrice = aggregateMealPrice(meal);

  const mealDetails = {
    name: meal.name,
    category: meal.category,
    ingredients: mealIngredients,
    macros: {
      kcal: parseFloat(totalMacros.kcal.toFixed(2)),
      fats: parseFloat(totalMacros.fats.toFixed(2)),
      protein: parseFloat(totalMacros.protein.toFixed(2)),
      carbohydrates: parseFloat(totalMacros.carbohydrates.toFixed(2)),
    },
    price: {
      cost: parseFloat(totalPrice.toFixed(2)),
      currency: 'nok',
    },
  };
  return mealDetails;
}
