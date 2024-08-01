import { makeDish } from '../../data/makeDish.mjs';
import { addAvocado } from '../prep/addAvocado.mjs';
import { addGreen } from '../prep/addGreen.mjs';
import { portionChicken } from '../prep/portionChicken.mjs';

export function chickenAndGreens(vegetable) {
  const chicken = portionChicken(300);
  const green = addGreen(vegetable);
  const avocado = addAvocado();
  const dish = makeDish('Chicken with greens of choice, avocado and a salad on the side', true, chicken, green, avocado);
  console.log('Chicken w/greens, avocado, salad on the side:', dish);
}
