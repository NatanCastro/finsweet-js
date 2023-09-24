import { createElement } from "/factory/create-element.factory.js";
import { placeElement } from "/factory/place-element.factory.js";
import { arrowComponent } from "./arrow.js";

/**
 * @param {string} text
 * @param {string} action
 * @param {string | undefined} className
 * @param {boolean} arrow
 */
export function linkComponent(
  text,
  action,
  className = undefined,
  arrow = false,
) {
  const link = createElement("a", {
    text,
    class: className,
    attrs: [
      {
        key: "href",
        value: action,
      },
    ],
  });
  if (arrow) {
    const arrowEl = arrowComponent("long");
    placeElement(arrowEl, link);
  }
  return link;
}