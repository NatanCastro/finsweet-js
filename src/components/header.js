import { headerData } from "/data/header.js";
import { createElement } from "/factory/create-element.factory.js";
import { linkComponent } from "./link.js";
import { placeElement } from "/factory/place-element.factory.js";

export function headerComponent(headerSect) {
  const logo = createElement("img", {
    attrs: [
      {
        key: "src",
        value: headerData.logo,
      },
    ],
  });
  const content = createElement("div", {
    class: "header-content",
  });
  const nav = createElement("nav", {
    class: "header-nav",
  });
  const ul = createElement("ul");
  headerData.links.map((l) => {
    const li = createElement("li");
    const link = linkComponent(l.text, l.action);
    placeElement(link, li);
    placeElement(li, ul);
  });

  const contactButton = linkComponent(
    headerData.contact.text,
    headerData.contact.action,
    "header-contact",
  );

  placeElement(ul, nav);
  placeElement(nav, content);
  placeElement(contactButton, content);
  placeElement(logo, headerSect);
  placeElement(content, headerSect);
}