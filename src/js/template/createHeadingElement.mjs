export function createHeadingElement(level, textContent, ...classes) {
  const heading = document.createElement(`h${level}`);
  heading.classList.add(...classes);
  heading.textContent = textContent;
  return heading;
}
