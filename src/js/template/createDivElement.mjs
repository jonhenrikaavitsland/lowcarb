export function createDivElement(...classes) {
  const div = document.createElement('div');
  div.classList.add(...classes);
  return div;
}
