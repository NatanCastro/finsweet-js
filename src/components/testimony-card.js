import { createElement } from "../factory/create-element.factory.js";
import { placeElement } from "../factory/place-element.factory.js";

export function testimonyCardComponent(testimony) {
  const testimonyEl = createElement("div");
  const quote = createElement("h3", {
    text: testimony.quote,
  });
  const user = createElement("div", {
    class: "testimony-user",
  });
  const userImg = createElement("div", {
    class: "testimony-user-image",
    attrs: [
      {
        key: "style",
        value: `background-image: url(${testimony.user.photo})`,
      },
    ],
  });
  const userDetails = createElement("div");
  const userName = createElement("p", {
    text: testimony.user.name,
  });
  const userPosition = createElement("p", {
    text: testimony.user.position,
  });

  placeElement(quote, testimonyEl);
  placeElement(userImg, user);
  placeElement(userName, userDetails);
  placeElement(userPosition, userDetails);
  placeElement(userDetails, user);
  placeElement(user, testimonyEl);

  return testimonyEl;
}