import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function addNuts(nut) {
  const nuts = findIngredientsByName(nut);
  const serving = {
    name: nuts.name,
    ingredients: [
      {
        name: nuts.name,
        grams: 20,
      },
    ],
    macros: {
      kcal: nuts.macros.kcal / 5,
      protein: nuts.macros.protein / 5,
      fats: nuts.macros.fats / 5,
      carbohydrates: nuts.macros.carbohydrates / 5,
    },
    price: {
      cost: (nuts.price.perKg / 1000) * 20,
      currency: nuts.price.currency,
    },
  };
  return serving;
}
