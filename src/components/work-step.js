import { factoryService } from "/service/factory/index.js";

export function workStepComponent(num, title, text) {
  const div = factoryService.createElement("div", { class: "step" });
  const numIcon = factoryService.createElement("div", {
    class: "step-icon",
  });
  const numIconText = factoryService.createElement("span", {
    text: (num + 1).toString().padStart(2, "0"),
  });
  const titleEl = factoryService.createElement("h3", { text: title });
  const textEl = factoryService.createElement("p", { text: text });

  factoryService.placeElement([
    { element: numIconText, position: numIcon },
    { element: numIcon, position: div },
    { element: titleEl, position: div },
    { element: textEl, position: div },
  ]);
  return div;
}