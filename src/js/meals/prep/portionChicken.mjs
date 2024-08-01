import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';

export function portionChicken(portionSize) {
  const chicken = findIngredientsByName('chicken');

  if (!chicken) {
    throw new Error('Chicken not found in ingredients');
  }

  const pricePerGram = chicken.price.perKg / 1000;
  const price = parseFloat((pricePerGram * portionSize).toFixed(2));

  const macros = {
    kcal: parseFloat((chicken.macros.kcal * (portionSize / 100)).toFixed(2)),
    protein: parseFloat((chicken.macros.protein * (portionSize / 100)).toFixed(2)),
    fats: parseFloat((chicken.macros.fats * (portionSize / 100)).toFixed(2)),
    carbohydrates: parseFloat((chicken.macros.carbohydrates * (portionSize / 100)).toFixed(2)),
  };

  const portionedChicken = {
    name: 'portion of chicken',
    price: {
      cost: price,
      currency: chicken.price.currency,
    },
    macros: macros,
    ingredients: [
      {
        name: 'portion of chicken',
        grams: portionSize,
      },
    ],
  };
  return portionedChicken;
}
