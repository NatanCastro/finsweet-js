import { factoryService } from "/service/factory/index.js";
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
  const link = factoryService.createElement("a", {
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
    factoryService.placeElement([{ element: arrowEl, position: link }]);
  }
  return link;
}