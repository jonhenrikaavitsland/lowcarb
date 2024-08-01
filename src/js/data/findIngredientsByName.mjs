import { ingredients } from '../foods/ingredients.mjs';

export function findIngredientsByName(name) {
  const allIngredients = [...ingredients.proteins, ...ingredients.nuts, ...ingredients.vegetables];

  return allIngredients.find((ingredient) => ingredient.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}
