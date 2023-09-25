import { linkComponent } from "/components/index.js";
import { heroData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createHero(heroSect) {
  const leftDiv = factoryService.createElement("div");
  const title = factoryService.createElement("h1", {
    text: heroData.title,
  });
  const text = factoryService.createElement("p", {
    text: heroData.text,
  });
  const buttonDiv = factoryService.createElement("div", {
    class: "hero-actions",
  });

  const primaryLink = linkComponent(
    heroData.primaryButton.text,
    heroData.primaryButton.action,
    "primary-action",
    false,
  );
  const secundaryLink = linkComponent(
    heroData.secondaryButton.text,
    heroData.secondaryButton.action,
    "secundary-action",
    true,
  );

  const img = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: heroData.image,
      },
    ],
  });

  factoryService.placeElement([
    { element: primaryLink, position: buttonDiv },
    { element: secundaryLink, position: buttonDiv },
    { element: title, position: leftDiv },
    { element: text, position: leftDiv },
    { element: buttonDiv, position: leftDiv },
    { element: leftDiv, position: heroSect },
    { element: img, position: heroSect },
  ]);
}