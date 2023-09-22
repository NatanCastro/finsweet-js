import { createElement } from "/factory/create-element.factory.js";
import { placeElement } from "/factory/place-element.factory.js";
import { arrowComponent } from "./arrow.js";

/**
 * @param {HTMLElement[]} items
 */
export function carouselComponent(items) {
  let length = items.length - 1;
  let curr = 0;

  const carousel = createElement("div", {
    class: "carousel",
  });
  const content = createElement("div", {
    class: "carousel-content",
  });
  const buttonsDiv = createElement("div", {
    class: "carousel-buttons",
  });
  const btnLeft = createElement("button");
  const arrowLeft = arrowComponent("short", "left");
  const btnRight = createElement("button");
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
    placeElement(i, content);
  });
  placeElement(arrowLeft, btnLeft);
  placeElement(arrowRight, btnRight);
  placeElement(btnLeft, buttonsDiv);
  placeElement(btnRight, buttonsDiv);
  placeElement(content, carousel);
  placeElement(buttonsDiv, carousel);

  return carousel;
}