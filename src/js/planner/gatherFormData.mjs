import { combineMacros } from '../data/combineMacros.mjs';
import { combinePrice } from '../data/combinePrice.mjs';
import { getSelectedMeals } from '../menu/getSelectedMeals.mjs';

export function gatherFormData() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedMeals = getSelectedMeals();
    const day = parseInt(document.querySelector('#day').value, 10);

    const combinedMacros = combineMacros(selectedMeals);
    const combinedPrice = combinePrice(selectedMeals);

    const dayObject = {
      id: day,
      day,
      macros: {
        kcal: combinedMacros.kcal.toFixed(2),
        fats: combinedMacros.fats.toFixed(2),
        protein: combinedMacros.protein.toFixed(2),
        carbohydrates: combinedMacros.carbohydrates.toFixed(2),
      },
      price: {
        cost: combinedPrice.toFixed(2),
        currency: 'nok',
      },
      meals: {
        breakfast: selectedMeals.find((meal) => meal.meal.category === 'breakfast')?.meal.name,
        lunch: selectedMeals.find((meal) => meal.meal.category === 'lunch')?.meal.name,
        dinner: selectedMeals.find((meal) => meal.meal.category === 'dinner')?.meal.name,
      },
    };

    console.log(dayObject);
  });
}
