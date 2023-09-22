import { createElement } from "/factory/create-element.factory.js";
import { placeElement } from "/factory/place-element.factory.js";

export function featureComponent(icon, title, text) {
  const feature = createElement("div");
  const iconEl = createElement("img", {
    attrs: [
      {
        key: "src",
        value: icon,
      },
    ],
  });
  const titleEl = createElement("h3", {
    text: title,
  });
  const textEl = createElement("p", {
    text: text,
  });

  placeElement(iconEl, feature);
  placeElement(titleEl, feature);
  placeElement(textEl, feature);
  return feature;
}