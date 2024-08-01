import { salad } from '../foods/salad.mjs';
import { macrosPerIngredient } from './macrosPerIngredient.mjs';
import { newIngredientObject } from './newIngredientObject.mjs';
import { pricePerIngredient } from './pricePerIngredient.mjs';

export function mixSalad() {
  const mixedSaladIngredients = [];

  salad.forEach((ingredient) => {
    const pricePer = pricePerIngredient(ingredient);
    const macrosPerPiece = macrosPerIngredient(ingredient);
    const newIngredient = newIngredientObject(ingredient, pricePer, macrosPerPiece);

    mixedSaladIngredients.push(newIngredient);
  });
  console.log(mixedSaladIngredients);
}
