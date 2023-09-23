import { carouselComponent } from "/components/carousel.js";
import { faqComponent } from "/components/faq.js";
import { featureComponent } from "/components/feature.js";
import { inquiryForm } from "/components/inquiry-form.js";
import { linkComponent } from "/components/link.js";
import { projectComponent } from "/components/project.js";
import { testimonyCardComponent } from "/components/testimony-card.js";
import { workStepComponent } from "/components/work-step.js";
import { faqData } from "/data/home/faq.js";
import { featuresData } from "/data/home/features.js";
import { heroData } from "/data/home/hero.js";
import { inquiryFormData } from "/data/home/inquiry-form.js";
import { projectsData } from "/data/home/projects.js";
import { testimonialsData } from "/data/home/testimony.js";
import { workData } from "/data/home/work.js";
import { FactoryService } from "./factory.service.js";
import { blogData } from "/data/home/blog.js";
import { blogCardComponent } from "/components/blog-card.js";

export class HomeService {
  factoryService;
  /**
   * @param {FactoryService} factoryService
   */
  constructor(factoryService) {
    this.factoryService = factoryService;
  }

  /**
   * @param {HTMLElement} heroSect
   */
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
      false,
    );
    const secundaryLink = linkComponent(
      heroData.secondaryButton.text,
      heroData.secondaryButton.action,
      "secundary-action",
      true,
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

  /**
   * @param {HTMLElement} workSect
   */
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
      true,
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

  /**
   * @param {HTMLElement} projectsSect
   */
  createProjects(projectsSect) {
    const topDiv = this.factoryService.createElement("div");
    const title = this.factoryService.createElement("h2", {
      text: projectsData.title,
    });
    const link = linkComponent(
      projectsData.button.text,
      projectsData.button.action,
      undefined,
      true,
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

  /**
   * @param {HTMLElement} featuresSect
   */
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
        feature.text,
      );
      this.factoryService.placeElement(featureEl, featuresDiv);
    });

    this.factoryService.placeElement(p, featuresSect);
    this.factoryService.placeElement(title, featuresSect);
    this.factoryService.placeElement(featuresDiv, featuresSect);
  }

  /**
   * @param {HTMLElement} testimonialsSect
   */
  createTestimonials(testimonialsSect) {
    const leftDiv = this.factoryService.createElement("div");

    const title = this.factoryService.createElement("h2", {
      text: testimonialsData.title,
    });
    const text = this.factoryService.createElement("p", {
      text: testimonialsData.text,
    });

    const testimonialsEl = testimonialsData.testimonials.map((t) => {
      const testimony = testimonyCardComponent(t);
      return testimony;
    });
    const carousel = carouselComponent(testimonialsEl);

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(text, leftDiv);
    this.factoryService.placeElement(leftDiv, testimonialsSect);
    this.factoryService.placeElement(carousel, testimonialsSect);
  }

  /**
   * @param {HTMLElement} faqSect
   */
  createFaq(faqSect) {
    const leftDiv = this.factoryService.createElement("div");

    const title = this.factoryService.createElement("h2", {
      text: faqData.title,
      class: "faq-title",
    });

    const button = this.factoryService.createElement("a", {
      text: faqData.button.text,
      class: "faq-action",
      attrs: [
        {
          key: "href",
          value: faqData.button.action,
        },
      ],
    });

    const faqEl = faqComponent(faqData.faq);

    this.factoryService.placeElement(title, leftDiv);
    this.factoryService.placeElement(button, leftDiv);
    this.factoryService.placeElement(leftDiv, faqSect);
    this.factoryService.placeElement(faqEl, faqSect);
  }

  /**
   * @param {HTMLElement} inquiryFormSect
   */
  createInquiryForm(inquiryFormSect) {
    const shell = this.factoryService.createElement("div", {
      class: "inquiry-form-shell",
    });
    const leftDiv = this.factoryService.createElement("div");
    const rightDiv = this.factoryService.createElement("div", {
      class: "inquiry-form-form",
    });
    const leftDivContent = this.factoryService.createElement("div", {
      class: "inquiry-form-content",
    });

    const title = this.factoryService.createElement("h2", {
      text: inquiryFormData.title,
    });
    const text = this.factoryService.createElement("p", {
      text: inquiryFormData.text,
    });

    const formTitle = this.factoryService.createElement("h2", {
      text: inquiryFormData.form.title,
    });
    const formText = this.factoryService.createElement("p", {
      text: inquiryFormData.form.text,
    });
    const form = inquiryForm(inquiryFormData.form);
    const button = linkComponent(
      inquiryFormData.button.text,
      inquiryFormData.button.action,
      undefined,
      true,
    );

    this.factoryService.placeElement(title, leftDivContent);
    this.factoryService.placeElement(text, leftDivContent);
    this.factoryService.placeElement(leftDivContent, leftDiv);
    this.factoryService.placeElement(formTitle, rightDiv);
    this.factoryService.placeElement(formText, rightDiv);
    this.factoryService.placeElement(form, rightDiv);
    this.factoryService.placeElement(button, rightDiv);
    this.factoryService.placeElement(leftDiv, shell);
    this.factoryService.placeElement(rightDiv, shell);
    this.factoryService.placeElement(shell, inquiryFormSect);
  }

  createBlog(blogSect) {
    const title = this.factoryService.createElement("h2", {
      text: blogData.title,
    });
    const blogPosts = this.factoryService.createElement("div");
    blogData.posts.slice(0, 3).forEach((p) => {
      const post = blogCardComponent(p);
      this.factoryService.placeElement(post, blogPosts);
    });

    this.factoryService.placeElement(title, blogSect);
    this.factoryService.placeElement(blogPosts, blogSect);
  }
}