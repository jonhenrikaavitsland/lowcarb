export function formatMacros(macros) {
  return {
    kcal: parseFloat(macros.kcal.toFixed(2)),
    fats: parseFloat(macros.fats.toFixed(2)),
    protein: parseFloat(macros.protein.toFixed(2)),
    carbohydrates: parseFloat(macros.carbohydrates.toFixed(2)),
  };
}
