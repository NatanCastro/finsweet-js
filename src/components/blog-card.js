import { placeElement } from "/factory/place-element.factory.js";
import { createElement } from "/factory/create-element.factory.js";
import { linkComponent } from "./link.js";

export function blogCardComponent(data) {
  const card = createElement("div", {
    class: "blog-card",
  });
  const image = createElement("img", {
    attrs: [
      {
        key: "src",
        value: data.image,
      },
    ],
  });
  const date = createElement("span", {
    text: new Date(data.date).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  });
  const title = createElement("h3", {
    text: data.title,
  });
  const text = createElement("p", {
    text: data.summary,
  });

  const button = linkComponent(
    data.button.text,
    data.button.action,
    undefined,
    true,
  );
  console.log(button);

  placeElement(image, card);
  placeElement(date, card);
  placeElement(title, card);
  placeElement(text, card);
  placeElement(button, card);
  return card;
}