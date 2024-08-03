export function calculateMacros(ingredient, weight) {
  const weightRatio = weight / 100;
  const macros = {
    kcal: ingredient.macros.kcal * weightRatio,
    fats: ingredient.macros.fats * weightRatio,
    protein: ingredient.macros.protein * weightRatio,
    carbohydrates: ingredient.macros.carbohydrates * weightRatio,
  };
  return macros;
}
