import { heroData } from "../data/home/hero.js";
import { workData } from "../data/home/work.js";
import { FactoryService } from "./factory.service.js";
export class HomeService {
  factoryService;
  /**
   * @param {FactoryService} factoryService
   */
  constructor(factoryService) {
    this.factoryService = factoryService;
  }

  /**
   * @param {HTMLElement} heroSect
   */
  createHero(heroSect) {
    const leftDiv = this.factoryService.createElement("div");

    const title = this.factoryService.createElement("h1", {
      text: heroData.title,
    });
    const text = this.factoryService.createElement("p", {
      text: heroData.text,
    });

    const buttonDiv = this.factoryService.createElement("div", {
      class: "hero-actions",
    });
    const primaryLink = this.factoryService.createElement("a", {
      text: heroData.primaryButton.text,
      class: "primary-action",
      attrs: [
        {
          key: "href",
          value: heroData.primaryButton.action,
        },
      ],
    });
    const secundaryLink = this.factoryService.createElement("a", {
      text: heroData.secondaryButton.text,
      class: "secundary-action",
      attrs: [
        {
          key: "href",
          value: heroData.secondaryButton.action,
        },
      ],
    });
    const arrow = this.factoryService.createElement("img", {
      attrs: [
        {
          key: "src",
          value: "../public/arrow-white.svg",
        },
      ],
    });

    const img = this.factoryService.createElement("img", {
      attrs: [
        {
          key: "src",
          value: heroData.image,
        },
      ],
    });

    this.factoryService.placeElement(arrow, secundaryLink);
    this.factoryService.placeElement(primaryLink, buttonDiv);
    this.factoryService.placeElement(secundaryLink, buttonDiv);

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(text, leftDiv);
    this.factoryService.placeElement(buttonDiv, leftDiv);

    this.factoryService.placeElement(leftDiv, heroSect);
    this.factoryService.placeElement(img, heroSect);
  }

  /**
   * @param {HTMLElement} workSect
   */
  createWork(workSect) {
    const leftDiv = this.factoryService.createElement("div");

    const title = this.factoryService.createElement("h1", {
      text: workData.title,
    });
    const text = this.factoryService.createElement("p", {
      text: workData.text,
    });
    const action = this.factoryService.createElement("a", {
      text: workData.button.text,
      attrs: [
        {
          key: "href",
          value: workData.button.action,
        },
      ],
    });
    const actionArrow = this.factoryService.createElement("img", {
      attrs: [
        {
          key: "src",
          value: "../public/arrow-purple.svg",
        },
      ],
    });

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(text, leftDiv);
    this.factoryService.placeElement(actionArrow, action);
    this.factoryService.placeElement(action, leftDiv);

    const rightDiv = this.factoryService.createElement("div", {
      class: "steps",
    });

    workData.steps.forEach(({ title, text }, i) => {
      const div = this.factoryService.createElement("div", { class: "step" });
      const numIcon = this.factoryService.createElement("div", {
        class: "step-icon",
      });
      const numIconText = this.factoryService.createElement("span", {
        text: `0${i + 1}`,
      });
      const titleEl = this.factoryService.createElement("h3", { text: title });
      const textEl = this.factoryService.createElement("p", { text: text });

      this.factoryService.placeElement(numIconText, numIcon);
      this.factoryService.placeElement(numIcon, div);
      this.factoryService.placeElement(titleEl, div);
      this.factoryService.placeElement(textEl, div);

      this.factoryService.placeElement(div, rightDiv);
    });

    this.factoryService.placeElement(leftDiv, workSect);
    this.factoryService.placeElement(rightDiv, workSect);
  }
}