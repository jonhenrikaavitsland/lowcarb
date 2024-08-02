export function calculateMacrosAndPrice(ingredientData, weight) {
  const price = (ingredientData.price.perKg / 1000) * weight;
  const macros = {
    kcal: (ingredientData.macros.kcal / 100) * weight,
    protein: (ingredientData.macros.protein / 100) * weight,
    fats: (ingredientData.macros.fats / 100) * weight,
    carbohydrates: (ingredientData.macros.carbohydrates / 100) * weight,
  };
  return { price, macros };
}
