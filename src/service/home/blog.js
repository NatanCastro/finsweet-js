import { blogCardComponent } from "/components/index.js";
import { blogData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createBlog(blogSect) {
  const title = factoryService.createElement("h2", {
    text: blogData.title,
  });
  const blogPosts = factoryService.createElement("div");
  blogData.posts.slice(0, 3).forEach((p) => {
    const post = blogCardComponent(p);
    factoryService.placeElement([{ element: post, position: blogPosts }]);
  });

  factoryService.placeElement([
    { element: title, position: blogSect },
    { element: blogPosts, position: blogSect },
  ]);
}