export function createSectionElement(...classes) {
  const element = document.createElement('section');
  element.classList.add(...classes);
  return element;
}
