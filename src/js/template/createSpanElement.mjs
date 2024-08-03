export function createSpanElement(textContent, ...classes) {
  const span = document.createElement('span');
  span.textContent = textContent;
  span.classList.add(...classes);
  return span;
}
