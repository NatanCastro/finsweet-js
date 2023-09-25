import { createHero } from "./hero.js";
import { createFaq } from "./faq.js";
import { createBlog } from "./blog.js";
import { createWork } from "./work.js";
import { createFeatures } from "./features.js";
import { createProjects } from "./projects.js";
import { createInquiryForm } from "./inquiry-form.js";
import { createTestimonials } from "./testimonials.js";

export const homeService = {
  createFaq,
  createHero,
  createTestimonials,
  createInquiryForm,
  createProjects,
  createFeatures,
  createWork,
  createBlog,
};