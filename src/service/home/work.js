import { linkComponent, workStepComponent } from "/components/index.js";
import { workData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createWork(workSect) {
  const leftDiv = factoryService.createElement("div");
  const title = factoryService.createElement("h1", {
    text: workData.title,
  });
  const text = factoryService.createElement("p", {
    text: workData.text,
  });

  const action = linkComponent(
    workData.button.text,
    workData.button.action,
    undefined,
    true,
  );

  const rightDiv = factoryService.createElement("div", {
    class: "steps",
  });

  workData.steps.forEach(({ title, text }, i) => {
    const workStep = workStepComponent(i, title, text);
    factoryService.placeElement([{ element: workStep, position: rightDiv }]);
  });

  factoryService.placeElement([
    { element: title, position: leftDiv },
    { element: text, position: leftDiv },
    { element: action, position: leftDiv },
    { element: leftDiv, position: workSect },
    { element: rightDiv, position: workSect },
  ]);
}