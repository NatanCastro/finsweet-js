import { arrows, orientation } from "/data/arrows.js";
import { createElement } from "/factory/create-element.factory.js";

/**
 * @param {keyof arrows} type
 * @param {string} [direction="right"]
 */
export function arrowComponent(type, direction = "right") {
  const rotation = orientation[direction];
  const div = createElement("div", {
    attrs: [
      {
        key: "style",
        value: `transform: rotate(${rotation});`,
      },
    ],
  });
  div.innerHTML = arrows[type];
  return div;
}