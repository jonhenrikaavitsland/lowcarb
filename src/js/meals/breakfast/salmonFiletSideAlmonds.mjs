import { makeDish } from '../../data/makeDish.mjs';
import { addNuts } from '../prep/addNuts.mjs';
import { chopSalmon } from '../prep/chopSalmon.mjs';

export function salmonFiletSideAlmonds() {
  const salmon = chopSalmon(250);
  const almonds = addNuts('almond');
  const dish = makeDish('Fresh filet of Salmon w/ almonds on the side', false, salmon, almonds);
  console.log('Fresh filet of Salmon w/ almonds on the side:', dish);
}
