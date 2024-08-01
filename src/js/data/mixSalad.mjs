import { salad } from '../foods/salad.mjs';
import { macrosPerIngredient } from './macrosPerIngredient.mjs';
import { newIngredientObject } from './newIngredientObject.mjs';
import { pricePerIngredient } from './pricePerIngredient.mjs';

export function mixSalad() {
  const mixedSaladIngredients = [];

  const totalMacros = {
    kcal: 0,
    protein: 0,
    fats: 0,
    carbohydrates: 0,
  };

  let priceTotal = 0;

  salad.forEach((ingredient) => {
    const pricePer = pricePerIngredient(ingredient);
    const macrosPerPiece = macrosPerIngredient(ingredient);
    const newIngredient = newIngredientObject(ingredient, pricePer, macrosPerPiece, 0.25);

    totalMacros.kcal += macrosPerPiece.kcal;
    totalMacros.protein += macrosPerPiece.protein;
    totalMacros.fats += macrosPerPiece.fats;
    totalMacros.carbohydrates += macrosPerPiece.carbohydrates;

    priceTotal += pricePer;

    mixedSaladIngredients.push(newIngredient);
  });

  const finalSalad = {
    name: 'Mixed Salad',
    servings: 1,
    totalPrice: parseFloat((priceTotal / 4).toFixed(2)),
    totalMacros: {
      kcal: parseFloat((totalMacros.kcal / 4).toFixed(2)),
      protein: parseFloat((totalMacros.protein / 4).toFixed(2)),
      fats: parseFloat((totalMacros.fats / 4).toFixed(2)),
      carbohydrates: parseFloat((totalMacros.carbohydrates / 4).toFixed(2)),
    },
    ingredients: mixedSaladIngredients,
  };
  return finalSalad;
}
