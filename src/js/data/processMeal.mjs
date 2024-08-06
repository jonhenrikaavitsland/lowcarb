import { aggregateMealMacros } from './aggregateMealMacros.mjs';
import { aggregateMealPrice } from './aggregateMealPrice.mjs';
import { formatMacros } from './formatMacros.mjs';
import { formatPrice } from './formatPrice.mjs';
import { getMealIngredients } from './getMealIngredients.mjs';

export function processMeal(meal) {
  const mealIngredients = getMealIngredients(meal);
  const totalMacros = formatMacros(aggregateMealMacros(meal));
  const totalPrice = formatPrice(aggregateMealPrice(meal));

  const mealDetails = {
    id: meal.id,
    name: meal.name,
    category: meal.category,
    isLowCarb: meal.isLowCarb,
    ingredients: mealIngredients,
    macros: totalMacros,
    price: totalPrice,
  };

  return mealDetails;
}
