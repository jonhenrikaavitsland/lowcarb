import { createDay } from './createDay.mjs';

export function changeDays() {
  const daysOption = document.querySelector('#term');
  const daysContainer = document.querySelector(`[data-planner="days"]`);
  let days;
  daysContainer.innerHTML = '';
  let value = +daysOption.value;

  for (let i = 0; i < value; i++) {
    days = createDay(i);
    daysContainer.append(days);
  }

  daysOption.addEventListener('change', () => {
    value = +daysOption.value;
    daysContainer.innerHTML = '';

    for (let i = 0; i < value; i++) {
      days = createDay(i);
      daysContainer.append(days);
    }
  });
}
