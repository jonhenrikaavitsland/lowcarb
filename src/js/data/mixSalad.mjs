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
    const newIngredient = newIngredientObject(ingredient, pricePer, macrosPerPiece);

    totalMacros.kcal += macrosPerPiece.kcal;
    totalMacros.protein += macrosPerPiece.protein;
    totalMacros.fats += macrosPerPiece.fats;
    totalMacros.carbohydrates += macrosPerPiece.carbohydrates;

    priceTotal += pricePer;

    mixedSaladIngredients.push(newIngredient);
  });

  const finalSalad = {
    name: 'Mixed Salad',
    servings: 4,
    totalPrice: parseFloat(priceTotal.toFixed(2)),
    totalMacros: {
      kcal: parseFloat(totalMacros.kcal.toFixed(2)),
      protein: parseFloat(totalMacros.protein.toFixed(2)),
      fats: parseFloat(totalMacros.fats.toFixed(2)),
      carbohydrates: parseFloat(totalMacros.carbohydrates.toFixed(2)),
    },
    ingredients: mixedSaladIngredients,
  };
  console.log('Mixed Salad:', finalSalad);
  return finalSalad;
}
