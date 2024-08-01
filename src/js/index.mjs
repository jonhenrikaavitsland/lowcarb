import { mixSalad } from './data/mixSalad.mjs';
import { ingredients } from './foods/ingredients.mjs';
import { salad } from './foods/salad.mjs';
import { omeletteSideAlmonds } from './meals/breakfast/omeletteSideAlmonds.mjs';
import { salmonFiletSideAlmonds } from './meals/breakfast/salmonFiletSideAlmonds.mjs';
import { portionChicken } from './meals/prep/portionChicken.mjs';

console.log('foods:', ingredients);
console.log('Salad Ingredients:', salad);

console.log('DISHES:');

console.log('Salad:');
mixSalad();

console.log('Breakfasts:');
omeletteSideAlmonds();
salmonFiletSideAlmonds();

portionChicken(300);
