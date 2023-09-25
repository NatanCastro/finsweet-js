import { factoryService } from "/service/factory/index.js";

export function featureComponent(icon, title, text) {
  const feature = factoryService.createElement("div");
  const iconEl = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: icon,
      },
    ],
  });
  const titleEl = factoryService.createElement("h3", {
    text: title,
  });
  const textEl = factoryService.createElement("p", {
    text: text,
  });

  factoryService.placeElement([
    { element: iconEl, position: feature },
    { element: titleEl, position: feature },
    { element: textEl, position: feature },
  ]);
  return feature;
}