import { makeDish } from '../../data/makeDish.mjs';
import { addGreen } from '../prep/addGreen.mjs';
import { addSweetPotato } from '../prep/addSweetPotato.mjs';
import { prepareProtein } from '../prep/prepareProtein.mjs';

export function barbecueRibsSweetPotato(green) {
  const vegetable = addGreen(green);
  const barbecueRibs = prepareProtein('barbecue ribs', 250);
  const sweetPotato = addSweetPotato();
  const dish = makeDish('Barbecue ribs w/ greens of choice and sweet potato', false, vegetable, barbecueRibs, sweetPotato);
  console.log('Barbecue ribs w/ greens of choice and sweet potato:', dish);
  return dish;
}
