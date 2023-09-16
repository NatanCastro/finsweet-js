import { featureComponent } from "../components/feature.js";
import { linkComponent } from "../components/link.js";
import { projectComponent } from "../components/project.js";
import { workStepComponent } from "../components/work-step.js";
import { featuresData } from "../data/home/features.js";
import { heroData } from "../data/home/hero.js";
import { projectsData } from "../data/home/projects.js";
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

  createProjects(projectsSect) {
    const topDiv = this.factoryService.createElement("div");
    const title = this.factoryService.createElement("h2", {
      text: projectsData.title,
    });
    const link = linkComponent(
      projectsData.button.text,
      projectsData.button.action,
      undefined,
      true
    );

    const projectsDiv = this.factoryService.createElement("div", {
      id: "projects-list",
    });
    projectsData.projects.forEach((project) => {
      const projectEl = projectComponent(project.image, project?.overlay);
      this.factoryService.placeElement(projectEl, projectsDiv);
    });

    this.factoryService.placeElement(title, topDiv);
    this.factoryService.placeElement(link, topDiv);

    this.factoryService.placeElement(topDiv, projectsSect);
    this.factoryService.placeElement(projectsDiv, projectsSect);
  }

  createFeatures(featuresSect) {
    const p = this.factoryService.createElement("p", {
      text: featuresData.name,
    });

    const title = this.factoryService.createElement("h2", {
      text: featuresData.title,
    });

    const featuresDiv = this.factoryService.createElement("div", {
      id: "features-list",
    });

    featuresData.features.forEach((feature) => {
      const featureEl = featureComponent(
        feature.icon,
        feature.title,
        feature.text
      );
      this.factoryService.placeElement(featureEl, featuresDiv);
    });

    this.factoryService.placeElement(p, featuresSect);
    this.factoryService.placeElement(title, featuresSect);
    this.factoryService.placeElement(featuresDiv, featuresSect);
  }
}