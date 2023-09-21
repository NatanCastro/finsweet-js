import { createElement } from "../factory/create-element.factory.js";
import { placeElement } from "../factory/place-element.factory.js";

export function workStepComponent(num, title, text) {
  const div = createElement("div", { class: "step" });
  const numIcon = createElement("div", {
    class: "step-icon",
  });
  const numIconText = createElement("span", {
    text: (num + 1).toString().padStart(2, "0"),
  });
  const titleEl = createElement("h3", { text: title });
  const textEl = createElement("p", { text: text });

  placeElement(numIconText, numIcon);
  placeElement(numIcon, div);
  placeElement(titleEl, div);
  placeElement(textEl, div);
  return div;
}