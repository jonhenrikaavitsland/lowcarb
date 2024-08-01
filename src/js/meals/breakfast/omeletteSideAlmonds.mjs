import { makeDish } from '../../data/makeDish.mjs';
import { addNuts } from '../prep/addNuts.mjs';
import { makeOmelette } from '../prep/omelette.mjs';

export function omeletteSideAlmonds() {
  const omeletteObj = makeOmelette(5);
  const almonds = addNuts('almond');
  const dish = makeDish('Omelette with almonds on the side', false, omeletteObj, almonds);
  console.log('Omelette w/ Almonds side:', dish);
  return dish;
}
