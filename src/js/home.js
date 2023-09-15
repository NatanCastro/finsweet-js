import { HomeService } from "../service/home.service.js";
import { placeElement } from "../factory/place-element.factory.js";
import { createElement } from "../factory/create-element.factory.js";
import { FactoryService } from "../service/factory.service.js";

const factoryService = new FactoryService(placeElement, createElement);

const homeService = new HomeService(factoryService);

const heroSect = document.getElementById("hero");
homeService.createHero(heroSect);

const workSect = document.getElementById("work");
homeService.createWork(workSect);

const projectsSect = document.getElementById("projects");
homeService.createProjects(projectsSect);