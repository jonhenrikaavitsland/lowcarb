import { getMealsByCategory } from './data/getMealsByCategory.mjs';

console.log('MENU:');
console.log('Breakfast Options:');
const brekfasts = getMealsByCategory('breakfast');
console.log(brekfasts);
console.log('Lunch Options:');
const lunches = getMealsByCategory('lunch');
console.log(lunches);
console.log('Dinner Options:');
const dinners = getMealsByCategory('dinner');
console.log(dinners);
