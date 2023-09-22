import { createElement } from "/factory/create-element.factory.js";
import { arrows, orientation as ori } from "/data/arrows.js";

/**
 * @param {keyof arrows} type
 * @param {string} [direction="right"]
 */
export function arrowComponent(type, direction = "right") {
  const rotation = ori[direction];
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