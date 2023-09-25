import { factoryService } from "/service/factory/index.js";
import { arrowComponent } from "./arrow.js";

/**
 * @param {HTMLElement[]} items
 */
export function carouselComponent(items) {
  let length = items.length - 1;
  let curr = 0;

  const carousel = factoryService.createElement("div", {
    class: "carousel",
  });
  const content = factoryService.createElement("div", {
    class: "carousel-content",
  });
  const buttonsDiv = factoryService.createElement("div", {
    class: "carousel-buttons",
  });
  const btnLeft = factoryService.createElement("button");
  const arrowLeft = arrowComponent("short", "left");
  const btnRight = factoryService.createElement("button");
  const arrowRight = arrowComponent("short");

  function setPosition() {
    content.scrollTo({ left: content.clientWidth * curr });
  }
  btnLeft.addEventListener("click", () => {
    if (curr === 0) {
      curr = length;
    } else {
      curr -= 1;
    }
    setPosition();
  });
  btnRight.addEventListener("click", () => {
    if (curr === length) {
      curr = 0;
    } else {
      curr += 1;
    }
    setPosition();
  });
  setInterval(() => {
    if (curr === length) {
      curr = 0;
    } else {
      curr += 1;
    }
    setPosition();
  }, 5000);

  items.forEach((i) => {
    factoryService.placeElement([{ element: i, position: content }]);
  });
  factoryService.placeElement([
    {
      element: arrowLeft,
      position: btnLeft,
    },
    {
      element: arrowRight,
      position: btnRight,
    },
    {
      element: btnLeft,
      position: buttonsDiv,
    },
    {
      element: btnRight,
      position: buttonsDiv,
    },
    {
      element: content,
      position: carousel,
    },
    {
      element: buttonsDiv,
      position: carousel,
    },
  ]);

  return carousel;
}