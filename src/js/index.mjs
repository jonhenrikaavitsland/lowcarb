import { getMealsByCategory } from './data/getMealsByCategory.mjs';
import { appendMealOptions } from './menu/appendMealOptions.mjs';

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
// Instead of calculating all days at once, do one day per click of button and then store object to array, then display the data for each day below the button.
// We want to display what meals, per day, total macros per day and price per day, as well as total price for all days combined.

// Also we want to show a shopping list for the days combined.
//  the list should contain ingredient name, price per kg, and the total weight.
