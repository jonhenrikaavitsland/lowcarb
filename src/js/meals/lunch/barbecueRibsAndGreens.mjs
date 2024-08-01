import { findIngredientsByName } from '../../data/findIngredientsByName.mjs';
import { makeDish } from '../../data/makeDish.mjs';
import { addAvocado } from '../prep/addAvocado.mjs';
import { prepareProtein } from '../prep/prepareProtein.mjs';

export function barbecueRibsAndGreens(vegetable) {
  const green = findIngredientsByName(vegetable);
  console.log('1:', green);
  const barbecueRibs = prepareProtein('barbecue ribs', 300);
  console.log('2:', barbecueRibs);
  const avocado = addAvocado();
  console.log('3:', avocado);
  const dish = makeDish('Barbecue ribs w/green of choice, avocado and salad on the side', true, barbecueRibs, avocado, green);
  console.log('Barbecue ribs w/ greens, avocado, salad on the side:', dish);
  return dish;
}
