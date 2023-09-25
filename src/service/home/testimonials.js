import {
  carouselComponent,
  testimonyCardComponent,
} from "/components/index.js";
import { testimonialsData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createTestimonials(testimonialsSect) {
  const leftDiv = factoryService.createElement("div");

  const title = factoryService.createElement("h2", {
    text: testimonialsData.title,
  });
  const text = factoryService.createElement("p", {
    text: testimonialsData.text,
  });

  const testimonialsEl = testimonialsData.testimonials.map((t) => {
    const testimony = testimonyCardComponent(t);
    return testimony;
  });
  const carousel = carouselComponent(testimonialsEl);

  factoryService.placeElement([
    { element: title, position: leftDiv },
    { element: text, position: leftDiv },
    { element: leftDiv, position: testimonialsSect },
    { element: carousel, position: testimonialsSect },
  ]);
}