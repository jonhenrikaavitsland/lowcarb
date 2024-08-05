import { getMealsByCategory } from '../data/getMealsByCategory.mjs';
import { createDivElement } from '../template/createDivElement.mjs';
import { createSectionElement } from '../template/createSectionElement.mjs';
import { createHeadingElement } from '../template/createHeadingElement.mjs';

export function createDay(i) {
  const breakfasts = getMealsByCategory('breakfast');
  const lunches = getMealsByCategory('lunch');
  const dinners = getMealsByCategory('dinner');

  const element = createSectionElement();
  element.setAttribute('id', i + 1);

  const day = createHeadingElement(2, `Day(s): ${i + 1}`, 'py-5');

  const breakfastWrap = createDivElement('flex', 'flex-col', 'pb-1');

  const breakfastLabel = document.createElement('label');
  breakfastLabel.setAttribute('for', 'breakfast');
  breakfastLabel.textContent = 'Breakfast Options:';

  const breakfastSelect = document.createElement('select');
  breakfastSelect.setAttribute('id', 'breakfast');
  breakfastSelect.setAttribute('name', 'breakfast');

  breakfasts.forEach((meal, index) => {
    const option = document.createElement('option');
    option.textContent = meal.name;
    option.setAttribute('value', index + 1);
    breakfastSelect.append(option);
  });

  const lunchWrap = createDivElement('flex', 'flex-col', 'pb-1');

  const lunchLabel = document.createElement('label');
  lunchLabel.setAttribute('for', 'lunch');
  lunchLabel.textContent = 'Lunch Options:';

  const lunchSelect = document.createElement('select');
  lunchSelect.setAttribute('id', 'lunch');
  lunchSelect.setAttribute('name', 'lunch');

  lunches.forEach((lunch, index) => {
    const option = document.createElement('option');
    option.textContent = lunch.name;
    option.setAttribute('value', index + 1);
    lunchSelect.append(option);
  });

  const dinnerWrap = createDivElement('flex', 'flex-col', 'pb-1');

  const dinnerLabel = document.createElement('label');
  dinnerLabel.setAttribute('for', 'dinner');
  dinnerLabel.textContent = 'Dinner Options:';

  const dinnerSelect = document.createElement('select');
  dinnerSelect.setAttribute('id', 'dinner');
  dinnerSelect.setAttribute('name', 'dinner');

  dinners.forEach((dinner, index) => {
    const option = document.createElement('option');
    option.textContent = dinner.name;
    option.setAttribute('value', index + 1);
    dinnerSelect.append(option);
  });

  dinnerWrap.append(dinnerLabel, dinnerSelect);
  lunchWrap.append(lunchLabel, lunchSelect);
  breakfastWrap.append(breakfastLabel, breakfastSelect);
  element.append(day, breakfastWrap, lunchWrap, dinnerWrap);

  return element;
}
