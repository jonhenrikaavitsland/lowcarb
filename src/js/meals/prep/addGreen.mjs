import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function addGreen(green) {
  const vegetable = findIngredientsByName(green);

  if (!vegetable) {
    throw new Error(`${green} not found in ingredients.`);
  }

  const servingSize = 150;
  const pricePerGram = vegetable.price.perKg / 1000;
  const price = parseFloat((pricePerGram * servingSize).toFixed(2));

  const macros = {
    kcal: parseFloat((vegetable.macros.kcal * (servingSize / 100)).toFixed(2)),
    protein: parseFloat((vegetable.macros.protein * (servingSize / 100)).toFixed(2)),
    fats: parseFloat((vegetable.macros.fats * (servingSize / 100)).toFixed(2)),
    carbohydrates: parseFloat((vegetable.macros.carbohydrates * (servingSize / 100)).toFixed(2)),
  };

  const serving = {
    name: vegetable.name,
    ingredients: [
      {
        name: vegetable.name,
        grams: servingSize,
      },
    ],
    macros: macros,
    price: {
      cost: price,
      currency: vegetable.price.currency,
    },
  };
  return serving;
}
