/**
 * @param {{position: HTMLElement, element: HTMLElement}[]} data
 */
export function placeElement(data) {
  data.forEach((d) => {
    d.position.appendChild(d.element);
  });
}