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

handleForm();
