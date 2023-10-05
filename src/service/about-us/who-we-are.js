import { whoWeAreData } from "/data/about-us/index.js";
import { factoryService } from "/service/factory/index.js";

export default function whoWeAre(whoWeAreSect) {
  const content = factoryService.createElement("div");
  const name = factoryService.createElement("span", {
    text: whoWeAreData.name,
  });
  const textContent = factoryService.createElement("div", {
    class: "who-we-are-text",
  });
  whoWeAreData.textContent.forEach((tc) => {
    const div = factoryService.createElement("div");
    const title = factoryService.createElement("h2", {
      text: tc.title,
    });
    const text = factoryService.createElement("p", {
      text: tc.text,
    });

    factoryService.placeElement([
      { element: title, position: div },
      { element: text, position: div },
      { element: div, position: textContent },
    ]);
  });
  const image = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: whoWeAreData.image,
      },
    ],
  });

  factoryService.placeElement([
    { element: name, position: content },
    { element: textContent, position: content },
    { element: image, position: content },
    { element: content, position: whoWeAreSect },
  ]);
}