import { HomeService } from "../service/home.service.js";
import { placeElement } from "../factory/place-element.factory.js";

const homeService = new HomeService(placeElement);

const heroSect = document.getElementById("hero");
homeService.createHero(heroSect);
