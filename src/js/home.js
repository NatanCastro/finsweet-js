import { HomeService } from "../service/home.service.js";
import { placeElement } from "../factory/place-element.factory.js";
import { createElement } from "../factory/create-element.factory.js";

const homeService = new HomeService(placeElement, createElement);

const heroSect = document.getElementById("hero");
homeService.createHero(heroSect);