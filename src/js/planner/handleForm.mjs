import { changeDays } from './changeDays.mjs';

export function handleForm() {
  const formElement = document.querySelector('form');
  changeDays();
  formElement.addEventListener('submit', () => {});
}
