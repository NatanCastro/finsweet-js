import { factoryService } from "/service/factory/index.js";

/**
 * @param {{title: string, text: string}[]} questions
 * @returns {HTMLElement}
 */
export function faqComponent(questions) {
  const faqEl = factoryService.createElement("div", {
    class: "faq-content",
  });
  questions.forEach((q, i) => {
    const details = factoryService.createElement("details", {
      class: "faq-item",
    });
    const summary = factoryService.createElement("summary", {
      text: q.title,
      attrs: [
        {
          key: "data-num",
          value: (i + 1).toString().padStart(2, "0"),
        },
      ],
    });
    const text = factoryService.createElement("p", {
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

    factoryService.placeElement([
      {
        element: summary,
        position: details,
      },
      {
        element: text,
        position: details,
      },
      {
        element: details,
        position: faqEl,
      },
    ]);
  });
  return faqEl;
}