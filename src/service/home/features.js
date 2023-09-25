import { featuresData } from "/data/index.js";
import { featureComponent } from "/components/index.js";
import { factoryService } from "/service/factory/index.js";

export function createFeatures(featuresSect) {
  const p = factoryService.createElement("p", {
    text: featuresData.name,
  });

  const title = factoryService.createElement("h2", {
    text: featuresData.title,
  });

  const featuresDiv = factoryService.createElement("div", {
    id: "features-list",
  });

  featuresData.features.forEach((feature) => {
    const featureEl = featureComponent(
      feature.icon,
      feature.title,
      feature.text,
    );
    factoryService.placeElement([
      { element: featureEl, position: featuresDiv },
    ]);
  });

  factoryService.placeElement([
    { element: p, position: featuresSect },
    { element: title, position: featuresSect },
    { element: featuresDiv, position: featuresSect },
  ]);
}