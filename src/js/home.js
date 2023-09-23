import { homeService } from "/service/setup/index.js";

const heroSect = document.getElementById("hero");
homeService.createHero(heroSect);

const workSect = document.getElementById("work");
homeService.createWork(workSect);

const projectsSect = document.getElementById("projects");
homeService.createProjects(projectsSect);

const featuresSect = document.getElementById("features");
homeService.createFeatures(featuresSect);

const testimonialsSect = document.getElementById("testimony");
homeService.createTestimonials(testimonialsSect);

const faqSect = document.getElementById("faq");
homeService.createFaq(faqSect);

const inquiryFormSect = document.getElementById("inquiry-form");
homeService.createInquiryForm(inquiryFormSect);

const blogSect = document.getElementById("blog");
homeService.createBlog(blogSect);