import { mixSalad } from './mixSalad.mjs';

export function makeDish(dishName, includeSalad, ...ingredientObjects) {
  if (ingredientObjects.length > 4) {
    throw new Error('A dish can contain at most 4 ingredients objects.');
  }

  const dish = {
    name: dishName,
    ingredients: [],
    price: {
      cost: 0,
      currency: 'nok',
    },
    macros: {
      kcal: 0,
      protein: 0,
      fats: 0,
      carbohydrates: 0,
    },
  };

  ingredientObjects.forEach((ingredientObject) => {
    dish.ingredients.push(...ingredientObject.ingredients);
    dish.price.cost += ingredientObject.price.cost;
    dish.macros.kcal += ingredientObject.macros.kcal;
    dish.macros.protein += ingredientObject.macros.protein;
    dish.macros.fats += ingredientObject.macros.fats;
    dish.macros.carbohydrates += ingredientObject.macros.carbohydrates;
  });

  if (includeSalad) {
    const salad = mixSalad();

    dish.ingredients.push(...salad.ingredients);
    dish.price.cost += salad.totalPrice;
    dish.macros.kcal += salad.totalMacros.kcal;
    dish.macros.protein += salad.totalMacros.protein;
    dish.macros.protein += salad.totalMacros.fats;
    dish.macros.carbohydrates += salad.totalMacros.carbohydrates;
  }
  return dish;
}
