import { createElement } from "../factory/create-element.factory.js";
import { placeElement } from "../factory/place-element.factory.js";
import { arrowComponent } from "./arrow.js";

export function linkComponent(text, action, className, arrow) {
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