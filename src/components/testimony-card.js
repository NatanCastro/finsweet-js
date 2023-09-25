import { factoryService } from "/service/factory/index.js";

export function testimonyCardComponent(testimony) {
  const testimonyEl = factoryService.createElement("div");
  const quote = factoryService.createElement("h3", {
    text: testimony.quote,
  });
  const user = factoryService.createElement("div", {
    class: "testimony-user",
  });
  const userImg = factoryService.createElement("div", {
    class: "testimony-user-image",
    attrs: [
      {
        key: "style",
        value: `background-image: url(${testimony.user.photo})`,
      },
    ],
  });
  const userDetails = factoryService.createElement("div");
  const userName = factoryService.createElement("p", {
    text: testimony.user.name,
  });
  const userPosition = factoryService.createElement("p", {
    text: testimony.user.position,
  });

  factoryService.placeElement([
    { element: quote, position: testimonyEl },
    { element: userImg, position: user },
    { element: userName, position: userDetails },
    { element: userPosition, position: userDetails },
    { element: userDetails, position: user },
    { element: user, position: testimonyEl },
  ]);

  return testimonyEl;
}