import { headerData } from "/data/index.js";
import { linkComponent } from "./link.js";
import { factoryService } from "/service/factory/index.js";

export function headerComponent(headerSect) {
  const logo = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: headerData.logo,
      },
    ],
  });
  const content = factoryService.createElement("div", {
    class: "header-content",
  });
  const nav = factoryService.createElement("nav", {
    class: "header-nav",
  });
  const ul = factoryService.createElement("ul");
  headerData.links.map((l) => {
    const li = factoryService.createElement("li");
    const link = linkComponent(l.text, l.action);
    factoryService.placeElement([
      { element: link, position: li },
      { element: li, position: ul },
    ]);
  });

  const contactButton = linkComponent(
    headerData.contact.text,
    headerData.contact.action,
    "header-contact",
  );

  factoryService.placeElement([
    { element: ul, position: nav },
    { element: nav, position: content },
    { element: contactButton, position: content },
    { element: logo, position: headerSect },
    { element: content, position: headerSect },
  ]);
}