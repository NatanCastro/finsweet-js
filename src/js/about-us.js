import { aboutUsService } from "/service/about-us/index.js";
import { footerComponent, headerComponent } from "/components/index.js";

const headerSect = document.getElementById("header");
headerComponent(headerSect);
const aboutUsSect = document.getElementById("about-us");
aboutUsService.aboutUs(aboutUsSect);
const footerSect = document.getElementById("footer");
footerComponent(footerSect);