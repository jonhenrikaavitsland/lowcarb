import { makeDish } from '../../data/makeDish.mjs';
import { addAvocado } from '../prep/addAvocado.mjs';
import { addGreen } from '../prep/addGreen.mjs';
import { prepareProtein } from '../prep/prepareProtein.mjs';

export function barbecueRibsAndGreens(vegetable) {
  const green = addGreen(vegetable);
  const barbecueRibs = prepareProtein('barbecue ribs', 300);
  const avocado = addAvocado();
  const dish = makeDish('Barbecue ribs w/green of choice, avocado and salad on the side', true, barbecueRibs, avocado, green);
  console.log('Barbecue ribs w/ greens, avocado, salad on the side:', dish);
  return dish;
}
