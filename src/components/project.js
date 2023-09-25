import { factoryService } from "/service/factory/index.js";
import { linkComponent } from "./link.js";

export function projectComponent(image, overlay) {
  const projectEl = factoryService.createElement("div", {
    attrs: [
      {
        key: "style",
        value: `background-image: url(${image})`,
      },
    ],
  });
  if (!overlay) return projectEl;

  const overlayEl = factoryService.createElement("div", {
    class: `overlay ${overlay.type}`,
  });

  const titleEl = factoryService.createElement("h3", {
    text: overlay.title,
  });
  factoryService.placeElement([{ element: titleEl, position: overlayEl }]);

  if (overlay.text) {
    const textEl = factoryService.createElement("p", {
      text: overlay.text,
    });
    factoryService.placeElement([{ element: textEl, position: overlayEl }]);
  }

  const actionEl = linkComponent(
    overlay.button.text,
    overlay.button.action,
    undefined,
    true,
  );
  factoryService.placeElement([
    { element: actionEl, position: overlayEl },
    { element: overlayEl, position: projectEl },
  ]);
  return projectEl;
}