import { makeDish } from '../data/makeDish.mjs';
import { pushToArray } from '../data/pushToArray.mjs';

export const breakfasts = [];
export const lunch = [];
export const dinner = [];

//  <<<<<  BREAKFAST  >>>>>
export const omeletteBreakfast = makeDish('omelette w/ almonds on the side');
pushToArray(breakfasts, omeletteBreakfast);

export const salmonBreakfast = makeDish('salmon filet w/ almonds on the side');
pushToArray(breakfasts, salmonBreakfast);

//  <<<<<  LUNCH  >>>>>
export const eggLunch = makeDish('omelette w/ broccoli, avocado, salad on the side');
pushToArray(lunch, eggLunch);

export const salmonLunch = makeDish('salmon w/ asparagus beans, avocado, salad on the side');
pushToArray(lunch, salmonLunch);

export const chickenLunch = makeDish('chicken w/ asparagus beans, avocado, salad on the side');
pushToArray(lunch, chickenLunch);

export const neckChopsLunch = makeDish('neck chops w/ broccoli, avocado, salad on the side');
pushToArray(lunch, neckChopsLunch);

export const pollockLunch = makeDish('pollock w/ asparagus beans, avocado, salad on the side');
pushToArray(lunch, pollockLunch);

//  <<<<<  DINNER  >>>>>
export const salmonDinner = makeDish('salmon w/ broccoli, sweet potato on the side');
pushToArray(dinner, salmonDinner);

export const chickenDinner = makeDish('chicken w/ asparagus beans, sweet potato on the side');
pushToArray(dinner, chickenDinner);

export const ribsDinner = makeDish('barbecue ribs w/ broccoli, sweet potato on the side');
pushToArray(dinner, ribsDinner);

export const porkChopDinner = makeDish('pork chops w/ brussels sprouts, sweet potato on the side');
pushToArray(dinner, porkChopDinner);

export const steakDinner = makeDish('beef pepper steak w/ broccoli, sweet potato on the side');
pushToArray(dinner, steakDinner);

export const entrecoteDinner = makeDish('entrecote w/ brussels sprouts, sweet potato on the side');
pushToArray(dinner, entrecoteDinner);
