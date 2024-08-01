import { makeDish } from '../../data/makeDish.mjs';
import { addGreen } from '../prep/addGreen.mjs';
import { addSweetPotato } from '../prep/addSweetPotato.mjs';
import { portionChicken } from '../prep/portionChicken.mjs';

export function chickenSweetPotato(green) {
  const chicken = portionChicken(250);
  const vegetable = addGreen(green);
  const sweetPotato = addSweetPotato();
  const dish = makeDish('Chicken w/ Greens of choice and sweet potato', false, chicken, vegetable, sweetPotato);
  console.log('Chicken w/ green of choice and sweet potato.', dish);
  return dish;
}
