import { addAvocado } from '../prep/addAvocado.mjs';
import { addGreen } from '../prep/addGreen.mjs';
import { portionChicken } from '../prep/portionChicken.mjs';

export function chickenAndGreens() {
  const chicken = portionChicken(300);
  const green = addGreen('broccoli');
  const avocado = addAvocado();
  console.log('chicken:', chicken);
  console.log('Green:', green);
  console.log('Avocado', avocado);
}
