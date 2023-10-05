import { aboutUsService } from "/service/about-us/index.js";
import { footerComponent, headerComponent } from "/components/index.js";

const headerSect = document.getElementById("header");
headerComponent(headerSect);
const aboutUsSect = document.getElementById("about-us");
aboutUsService.aboutUs(aboutUsSect);
const whoWeAreSect = document.getElementById("who-we-are");
aboutUsService.whoWeAre(whoWeAreSect);
const footerSect = document.getElementById("footer");
footerComponent(footerSect);