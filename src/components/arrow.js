import { factoryService } from "/service/factory/index.js";
import { arrows, orientation } from "/data/index.js";

/**
 * @param {keyof arrows} type
 * @param {string} [direction="right"]
 */
export function arrowComponent(type, direction = "right") {
  const rotation = orientation[direction];
  const div = factoryService.createElement("div", {
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