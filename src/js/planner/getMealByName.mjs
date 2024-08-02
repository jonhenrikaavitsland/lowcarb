export function getMealByName(mealArray, mealName) {
  return mealArray.find((meal) => meal.name === mealName);
}
