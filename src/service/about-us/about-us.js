import { aboutUsData } from "/data/about-us/index.js";
import { factoryService } from "/service/factory/index.js";

/**
 * @param {HTMLElement} aboutUsSect
 */
export default function aboutUs(aboutUsSect) {
  const content = factoryService.createElement("div");
  const image = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: aboutUsData.image,
      },
    ],
  });

  const sect = factoryService.createElement("span", {
    text: aboutUsData.name,
  });
  const title = factoryService.createElement("h1", {
    text: aboutUsData.title,
  });
  const text = factoryService.createElement("p", {
    text: aboutUsData.text,
  });

  factoryService.placeElement([
    { element: sect, position: content },
    { element: title, position: content },
    { element: text, position: content },
    { element: content, position: aboutUsSect },
    { element: image, position: aboutUsSect },
  ]);
}