import { linkComponent } from "../components/link.js";
import { workStepComponent } from "../components/work-step.js";
import { heroData } from "../data/home/hero.js";
import { workData } from "../data/home/work.js";

export class HomeService {
  factoryService;
  constructor(factoryService) {
    this.factoryService = factoryService;
  }

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

    const primaryLink = linkComponent(
      heroData.primaryButton.text,
      heroData.primaryButton.action,
      "primary-action",
      false
    );
    const secundaryLink = linkComponent(
      heroData.secondaryButton.text,
      heroData.secondaryButton.action,
      "secundary-action",
      true
    );

    const img = this.factoryService.createElement("img", {
      attrs: [
        {
          key: "src",
          value: heroData.image,
        },
      ],
    });

    this.factoryService.placeElement(primaryLink, buttonDiv);
    this.factoryService.placeElement(secundaryLink, buttonDiv);

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(text, leftDiv);
    this.factoryService.placeElement(buttonDiv, leftDiv);

    this.factoryService.placeElement(leftDiv, heroSect);
    this.factoryService.placeElement(img, heroSect);
  }

  createWork(workSect) {
    const leftDiv = this.factoryService.createElement("div");
    const title = this.factoryService.createElement("h1", {
      text: workData.title,
    });
    const text = this.factoryService.createElement("p", {
      text: workData.text,
    });

    const action = linkComponent(
      workData.button.text,
      workData.button.action,
      undefined,
      true
    );

    const rightDiv = this.factoryService.createElement("div", {
      class: "steps",
    });

    workData.steps.forEach(({ title, text }, i) => {
      const workStep = workStepComponent(i, title, text);
      this.factoryService.placeElement(workStep, rightDiv);
    });

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(text, leftDiv);
    this.factoryService.placeElement(action, leftDiv);

    this.factoryService.placeElement(leftDiv, workSect);
    this.factoryService.placeElement(rightDiv, workSect);
  }
}