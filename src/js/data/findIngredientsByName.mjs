import { ingredients } from '../foods/ingredients.mjs';

export function findIngredientsByName(name) {
  return ingredients.proteins.find((ingredient) => ingredient.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}
