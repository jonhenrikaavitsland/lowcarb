import { mixSalad } from './data/mixSalad.mjs';
import { ingredients } from './foods/ingredients.mjs';
import { salad } from './foods/salad.mjs';
import { omeletteSideAlmonds } from './meals/breakfast/omeletteSideAlmonds.mjs';
import { salmonFiletSideAlmonds } from './meals/breakfast/salmonFiletSideAlmonds.mjs';
import { chickenAndGreens } from './meals/lunch/chickenAndGreens.mjs';

console.log('foods:', ingredients);
console.log('Salad Ingredients:', salad);

console.log('DISHES:');

console.log('Salad:');
console.log(mixSalad());

console.log('Breakfasts:');
omeletteSideAlmonds();
salmonFiletSideAlmonds();

console.log('Lunch:');
chickenAndGreens('broccoli');
