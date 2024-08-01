import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function chopSalmon(amount) {
  const salmon = findIngredientsByName('salmon');

  if (!salmon) {
    throw new Error('Salmon not found in ingredients.');
  }

  const pricePerGram = salmon.price.perKg / 1000;
  const price = pricePerGram * amount;

  const macros = {
    kcal: salmon.macros.kcal * (amount / 100),
    protein: salmon.macros.protein * (amount / 100),
    fats: salmon.macros.fats * (amount / 100),
    carbohydrates: salmon.macros.carbohydrates * (amount / 100),
  };

  const choppedSalmon = {
    name: 'fresh salmon filet',
    price: {
      cost: price,
      currency: salmon.price.currency,
    },
    macros: macros,
    ingredients: [
      {
        name: 'fresh salmon filet',
        grams: amount,
      },
    ],
  };
  return choppedSalmon;
}
