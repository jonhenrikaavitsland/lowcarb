import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function makeOmelette(amount) {
  const egg = findIngredientsByName('egg');

  const omelette = {
    name: 'omelette',
    numberOfMediumSizedEggs: parseFloat(amount),
    ingredients: [
      {
        name: egg.name,
        grams: egg.gramPiece * amount,
      },
    ],
    macros: {
      kcal: egg.macros.kcal * amount,
      protein: egg.macros.protein * amount,
      fats: egg.macros.fats * amount,
      carbohydrates: egg.macros.carbohydrates * amount,
    },
    price: {
      cost: parseFloat(((egg.price.perKg / 1000) * (amount * egg.gramPiece)).toFixed(2)),
      currency: egg.price.currency,
    },
  };
  return omelette;
}
