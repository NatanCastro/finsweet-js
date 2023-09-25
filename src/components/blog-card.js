import { factoryService } from "/service/factory/index.js";
import { linkComponent } from "./link.js";

export function blogCardComponent(data) {
  const card = factoryService.createElement("div", {
    class: "blog-card",
  });
  const image = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: data.image,
      },
    ],
  });
  const date = factoryService.createElement("span", {
    text: new Date(data.date).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  });
  const title = factoryService.createElement("h3", {
    text: data.title,
  });
  const text = factoryService.createElement("p", {
    text: data.summary,
  });

  const button = linkComponent(data.button.text, data.button.action);

  factoryService.placeElement([
    {
      element: image,
      position: card,
    },
    {
      element: date,
      position: card,
    },
    {
      element: title,
      position: card,
    },
    {
      element: text,
      position: card,
    },
    {
      element: button,
      position: card,
    },
  ]);
  return card;
}