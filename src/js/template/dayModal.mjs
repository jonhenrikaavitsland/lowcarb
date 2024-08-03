import { load } from '../storage/load.mjs';
import { createBtnElement } from './createBtnElement.mjs';
import { createDivElement } from './createDivElement.mjs';
import { createHeadingElement } from './createHeadingElement.mjs';
import { createSectionElement } from './createSectionElement.mjs';
import { createImgElement } from './createImgElement.mjs';
import { createParagraphElement } from './createParagraphElement.mjs';
import { createSpanElement } from './createSpanElement.mjs';

export function dayModal(day) {
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  const element = createSectionElement('bg-amber-100', 'absolute', 'z-10', 'p-5');

  const heading = createHeadingElement('2', `Day ${day}`, 'uppercase', 'text-center', 'text-4xl', 'font-bold', 'p-5');

  const mealsWrap = createDivElement('flex', 'flex-col', 'gap-4');
  element.append(heading, mealsWrap);

  for (let i = 0; i < 3; i++) {
    const mealCard = createSectionElement('bg-slate-300', 'rounded-xl', 'px-1');

    const cardHeading = createHeadingElement('3', categories[i], 'text-center', 'text-2xl', 'py-3', 'text-semibold');

    mealCard.append(cardHeading);

    if (!load('breakfast')) {
      const buttonWrap = createDivElement('flex', 'justify-center');

      const button = createBtnElement('Choose meal', 'capitalize', 'bg-amber-100', 'py-3', 'px-6', 'rounded-full');

      buttonWrap.append(button);
      mealCard.append(buttonWrap);
      mealsWrap.append(mealCard);
    } else if (load('breakfast')) {
      const breakfastObject = load('breakfast');

      const image = createImgElement(breakfastObject.image, breakfastObject.alt, 'h-24', 'w-full', 'bg-slate-300');

      const mealWrap = createSectionElement('pt-2');

      const mealName = createHeadingElement('4', breakfastObject.name, 'text-2xl', 'font-semibold');

      const mealInfo = createParagraphElement(breakfastObject.infoText, 'font-light');

      const ingredientsWrap = createParagraphElement(breakfastObject.ingredients, 'font-light', 'italic', 'text-sm', 'bg-amber-100', 'px-6', 'py-3', 'rounded-full');

      const macros = createParagraphElement(breakfastObject.macros);

      const price = createSpanElement(breakfastObject.price, 'font-semibold', 'py-3');

      mealCard.append(image, mealWrap);
      mealWrap.append(mealName, mealInfo, ingredientsWrap, macros, price);
      mealsWrap.append(mealCard);
    }
  }
}
