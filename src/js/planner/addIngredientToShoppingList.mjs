export function addIngredientToShoppingList(shoppingList, ingredient) {
  const existingItem = shoppingList.find((item) => item.name === ingredient.name);
  if (existingItem) {
    existingItem.weight += ingredient.weight;
  } else {
    shoppingList.push({ name: ingredient.name, weight: ingredient.weight });
  }
}
