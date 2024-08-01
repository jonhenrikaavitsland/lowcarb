import { mixSalad } from './data/mixSalad.mjs';
import { ingredients } from './foods/ingredients.mjs';
import { salad } from './foods/salad.mjs';
import { omeletteSideAlmonds } from './meals/breakfast/omeletteSideAlmonds.mjs';
import { salmonFiletSideAlmonds } from './meals/breakfast/salmonFiletSideAlmonds.mjs';

console.log('foods:', ingredients);
console.log('Salad Ingredients:', salad);
console.log('SALAD:', mixSalad());

console.log('DISHES:');

console.log('Breakfasts:');
omeletteSideAlmonds();
salmonFiletSideAlmonds();
