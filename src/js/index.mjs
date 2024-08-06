import { getMealsByCategory } from './data/getMealsByCategory.mjs';
import { appendMealOptions } from './menu/appendMealOptions.mjs';
import { gatherFormData } from './planner/gatherFormData.mjs';

console.log('LOW CARB MENU:');
console.log('Breakfast Options:');
const breakfast = getMealsByCategory('breakfast', true);
console.log(breakfast);
console.log('Lunch Options:');
const lunch = getMealsByCategory('lunch', true);
console.log(lunch);
console.log('Dinner Options:');
const dinner = getMealsByCategory('dinner', true);
console.log(dinner);

console.log('REGULAR MENU');

appendMealOptions('breakfast', '#breakfast');
appendMealOptions('lunch', '#lunch');
appendMealOptions('dinner', '#dinner');

gatherFormData();
// Continue building out this function to display the information day by day in the pre made containers.
