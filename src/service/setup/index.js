import { createElement } from "../../factory/create-element.factory.js";
import { placeElement } from "../../factory/place-element.factory.js";
import { FactoryService } from "../factory.service.js";
import { HomeService } from "../home.service.js";

const factoryService = new FactoryService(placeElement, createElement);

export const homeService = new HomeService(factoryService);