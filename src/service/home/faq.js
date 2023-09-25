import { faqComponent } from "/components/index.js";
import { faqData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createFaq(faqSect) {
  const leftDiv = factoryService.createElement("div");

  const title = factoryService.createElement("h2", {
    text: faqData.title,
    class: "faq-title",
  });

  const button = factoryService.createElement("a", {
    text: faqData.button.text,
    class: "faq-action",
    attrs: [
      {
        key: "href",
        value: faqData.button.action,
      },
    ],
  });

  const faqEl = faqComponent(faqData.faq);

  factoryService.placeElement([
    { element: title, position: leftDiv },
    { element: button, position: leftDiv },
    { element: leftDiv, position: faqSect },
    { element: faqEl, position: faqSect },
  ]);
}