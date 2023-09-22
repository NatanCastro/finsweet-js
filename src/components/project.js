import { createElement } from "/factory/create-element.factory.js";
import { placeElement } from "/factory/place-element.factory.js";
import { linkComponent } from "./link.js";

export function projectComponent(image, overlay) {
  const projectEl = createElement("div", {
    attrs: [
      {
        key: "style",
        value: `background-image: url(${image})`,
      },
    ],
  });
  if (!overlay) return projectEl;

  const overlayEl = createElement("div", {
    class: `overlay ${overlay.type}`,
  });

  const titleEl = createElement("h3", {
    text: overlay.title,
  });
  placeElement(titleEl, overlayEl);

  if (overlay.text) {
    const textEl = createElement("p", {
      text: overlay.text,
    });
    placeElement(textEl, overlayEl);
  }

  const actionEl = linkComponent(
    overlay.button.text,
    overlay.button.action,
    undefined,
    true,
  );
  placeElement(actionEl, overlayEl);

  placeElement(overlayEl, projectEl);
  return projectEl;
}