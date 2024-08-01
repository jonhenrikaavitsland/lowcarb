import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function addSweetPotato() {
  const sweetPotato = findIngredientsByName('sweet potato');

  if (!sweetPotato) {
    throw new Error('sweet potato not found in ingredients');
  }

  const servingSize = 300; // grams
  const pricePerGram = sweetPotato.price.perKg / 1000;
  const price = parseFloat((pricePerGram * servingSize).toFixed(2));

  const macros = {
    kcal: parseFloat((sweetPotato.macros.kcal * (servingSize / 100)).toFixed(2)),
    protein: parseFloat((sweetPotato.macros.protein * (servingSize / 100)).toFixed(2)),
    fats: parseFloat((sweetPotato.macros.fats * (servingSize / 100)).toFixed(2)),
    carbohydrates: parseFloat((sweetPotato.macros.carbohydrates * (servingSize / 100)).toFixed(2)),
  };

  const serving = {
    name: sweetPotato.name,
    ingredients: [
      {
        name: sweetPotato.name,
        grams: servingSize,
      },
    ],
    macros: macros,
    price: {
      cost: price,
      currency: sweetPotato.price.currency,
    },
  };
  return serving;
}
