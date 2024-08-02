export function generateTotalShoppingList(dayPlans) {
  const totalShoppingList = [];

  dayPlans.forEach((dayPlan) => {
    dayPlan.shoppingList.forEach((ingredient) => {
      const existingItem = totalShoppingList.find((item) => item.name === ingredient.name);
      if (existingItem) {
        existingItem.weight += ingredient.weight;
      } else {
        totalShoppingList.push({ name: ingredient.name, weight: ingredient.weight });
      }
    });
  });

  return totalShoppingList.map((item) => ({
    ...item,
    weight: parseFloat(item.weight.toFixed(2)),
  }));
}
