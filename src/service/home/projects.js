import { projectsData } from "/data/index.js";
import { linkComponent, projectComponent } from "/components/index.js";
import { factoryService } from "/service/factory/index.js";

export function createProjects(projectsSect) {
  const topDiv = factoryService.createElement("div");
  const title = factoryService.createElement("h2", {
    text: projectsData.title,
  });
  const link = linkComponent(
    projectsData.button.text,
    projectsData.button.action,
    undefined,
    true,
  );

  const projectsDiv = factoryService.createElement("div", {
    id: "projects-list",
  });
  projectsData.projects.forEach((project) => {
    const projectEl = projectComponent(project.image, project?.overlay);
    factoryService.placeElement([
      { element: projectEl, position: projectsDiv },
    ]);
  });

  factoryService.placeElement([
    { element: title, position: topDiv },
    { element: link, position: topDiv },
    { element: topDiv, position: projectsSect },
    { element: projectsDiv, position: projectsSect },
  ]);
}