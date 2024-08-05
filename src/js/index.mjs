import { getAllMealDetails } from './data/getAllMealDetails.mjs';
import { getMealsByCategory } from './data/getMealsByCategory.mjs';
import { handleForm } from './planner/handleForm.mjs';

console.log('MENU:');
console.log('Breakfast Options:');
const brekfast = getMealsByCategory('breakfast');
console.log(brekfast);
console.log('Lunch Options:');
const lunch = getMealsByCategory('lunch');
console.log(lunch);
console.log('Dinner Options:');
const dinner = getMealsByCategory('dinner');
console.log(dinner);
const allMeals = getAllMealDetails();
console.log(allMeals);

handleForm();

// Instead of calculating all days at once, do one day per click of button and then store object to array, then display the data for each day below the button.
// We want to display what meals, per day, total macros per day and price per day, as well as total price for all days combined.

// Also we want to show a shopping list for the days combined.
//  the list should contain ingredient name, price per kg, and the total weight.
