import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function addAvocado() {
  const avocado = findIngredientsByName('fresh ripe avocado');

  if (!avocado) {
    throw new Error('fresh ripe avocado not found in ingredients');
  }

  const servingSize = 160;
  const pricePerGram = avocado.price.perKg / 1000;
  const price = parseFloat((pricePerGram * servingSize).toFixed(2));

  const macros = {
    kcal: parseFloat((avocado.macros.kcal * (servingSize / 100)).toFixed(2)),
    protein: parseFloat((avocado.macros.protein * (servingSize / 100)).toFixed(2)),
    fats: parseFloat((avocado.macros.fats * (servingSize / 100)).toFixed(2)),
    carbohydrates: parseFloat((avocado.macros.carbohydrates * (servingSize / 100)).toFixed(2)),
  };

  const serving = {
    name: avocado.name,
    ingredients: [
      {
        name: avocado.name,
        grams: servingSize,
      },
    ],
    macros: macros,
    price: {
      cost: price,
      currency: avocado.price.currency,
    },
  };
  return serving;
}
