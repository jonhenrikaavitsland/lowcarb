import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function prepareProtein(ingredientName, portionSize) {
  const ingredient = findIngredientsByName(ingredientName);

  if (!ingredient) {
    throw new Error(`${ingredientName} not found in ingredients.`);
  }

  const pricePerGram = ingredient.price.perKg / 1000;
  const price = parseFloat((pricePerGram * portionSize).toFixed(2));

  const macros = {
    kcal: parseFloat((ingredient.macros.kcal * (portionSize / 100)).toFixed(2)),
    protein: parseFloat((ingredient.macros.protein * (portionSize / 100)).toFixed(2)),
    fats: parseFloat((ingredient.macros.fats * (portionSize / 100)).toFixed(2)),
    carbohydrates: parseFloat((ingredient.macros.carbohydrates * (portionSize / 100)).toFixed(2)),
  };

  const portionedIngredient = {
    name: ingredient.name,
    price: {
      cost: price,
      currency: ingredient.price.currency,
    },
    macros: macros,
    ingredients: [
      {
        name: ingredient.name,
        grams: portionSize,
      },
    ],
  };
  return portionedIngredient;
}
