import { createElement } from "../factory/create-element.factory.js";
import { placeElement } from "../factory/place-element.factory.js";

/**
 * @param {{title: string, text: string}[]} questions
 * @returns {HTMLElement}
 */
export function faqComponent(questions) {
  const faqEl = createElement("div", {
    class: "faq-content",
  });
  questions.forEach((q, i) => {
    const details = createElement("details", {
      class: "faq-item",
    });
    const summary = createElement("summary", {
      text: q.title,
      attrs: [
        {
          key: "data-num",
          value: (i + 1).toString().padStart(2, "0"),
        },
      ],
    });
    const text = createElement("p", {
      text: q.text,
    });

    details.addEventListener("toggle", () => {
      if (details.open) {
        details.animate(
          [
            {
              height: "calc(1lh + 1rem)",
            },
            {
              height: "171px",
            },
          ],
          {
            duration: 300,
          },
        );
      } else {
        details.animate(
          [
            {
              height: "calc(1lh + 1rem)",
            },
            {
              height: "171px",
            },
          ],
          {
            duration: 300,
            direction: "reverse",
          },
        );
      }
    });

    placeElement(summary, details);
    placeElement(text, details);
    placeElement(details, faqEl);
  });
  return faqEl;
}