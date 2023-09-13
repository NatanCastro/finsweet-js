import { heroData } from "../data/home/hero.js";
import { placeElement } from "../factory/place-element.factory.js";
export class HomeService {
  placeElementFactory;
  constructor(placeElementFactory) {
    this.placeElementFactory = placeElementFactory;
  }

  createHero(heroSect) {
    const leftDiv = document.createElement("div");

    const title = document.createElement("h1");
    title.innerText = heroData.title;
    const subtitle = document.createElement("h2");
    subtitle.innerText = heroData.subtitle;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("hero-actions");
    const primaryLink = document.createElement("a");
    primaryLink.innerText = heroData.primaryButton.text;
    primaryLink.setAttribute("href", heroData.primaryButton.action);
    primaryLink.classList.add("primary-action");
    const secundaryLink = document.createElement("a");
    secundaryLink.innerText = heroData.secondaryButton.text;
    secundaryLink.setAttribute("href", heroData.secondaryButton.action);
    secundaryLink.classList.add("secundary-action");
    const arrow = document.createElement("img");
    arrow.setAttribute("src", "../public/arrow.svg");

    placeElement(arrow, secundaryLink);
    placeElement(primaryLink, buttonDiv);
    placeElement(secundaryLink, buttonDiv);

    const img = document.createElement("img");
    img.setAttribute("src", heroData.image);

    placeElement(title, leftDiv);
    placeElement(subtitle, leftDiv);
    placeElement(buttonDiv, leftDiv);

    placeElement(leftDiv, heroSect);
    placeElement(img, heroSect);
  }
}
