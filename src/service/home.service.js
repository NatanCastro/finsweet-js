import { heroData } from "../data/home/hero.js";
import { placeElement } from "../factory/place-element.factory.js";
import { createElement } from "../factory/create-element.factory.js";
export class HomeService {
  placeElementFactory;
  createElementFactory;
  /**
   * @param {typeof placeElement} placeElementFactory
   * @param {typeof createElement} createElementFactory
   */
  constructor(placeElementFactory, createElementFactory) {
    this.placeElementFactory = placeElementFactory;
    this.createElementFactory = createElementFactory;
  }

  /**
   * @param {HTMLElement} heroSect
   */
  createHero(heroSect) {
    const leftDiv = this.createElementFactory("div");

    const title = this.createElementFactory("h1", { text: heroData.title });
    const subtitle = this.createElementFactory("h2", {
      text: heroData.subtitle,
    });

    const buttonDiv = this.createElementFactory("div", {
      class: "hero-actions",
    });
    const primaryLink = this.createElementFactory("a", {
      text: heroData.primaryButton.text,
      class: "primary-action",
      attrs: [
        {
          key: "href",
          value: heroData.primaryButton.action,
        },
      ],
    });
    const secundaryLink = this.createElementFactory("a", {
      text: heroData.secondaryButton.text,
      class: "secundary-action",
      attrs: [
        {
          key: "href",
          value: heroData.secondaryButton.action,
        },
      ],
    });
    const arrow = this.createElementFactory("img", {
      attrs: [
        {
          key: "src",
          value: "../public/arrow.svg",
        },
      ],
    });

    const img = this.createElementFactory("img", {
      attrs: [
        {
          key: "src",
          value: heroData.image,
        },
      ],
    });

    this.placeElementFactory(arrow, secundaryLink);
    this.placeElementFactory(primaryLink, buttonDiv);
    this.placeElementFactory(secundaryLink, buttonDiv);

    this.placeElementFactory(title, leftDiv);
    this.placeElementFactory(subtitle, leftDiv);
    this.placeElementFactory(buttonDiv, leftDiv);

    this.placeElementFactory(leftDiv, heroSect);
    this.placeElementFactory(img, heroSect);
  }
}