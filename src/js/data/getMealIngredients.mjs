export function getMealIngredients(meal) {
  return meal.contains.map((item) => ({
    name: item.ingredient,
    weight: item.weight,
  }));
}
