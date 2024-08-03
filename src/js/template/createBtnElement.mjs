export function createBtnElement(textContent, ...classes) {
  const button = document.createElement('button');
  button.textContent = textContent;
  button.classList.add(...classes);
  return button;
}
