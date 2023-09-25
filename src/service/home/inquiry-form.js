import { inquiryForm, linkComponent } from "/components/index.js";
import { inquiryFormData } from "/data/index.js";
import { factoryService } from "/service/factory/index.js";

export function createInquiryForm(inquiryFormSect) {
  const shell = factoryService.createElement("div", {
    class: "inquiry-form-shell",
  });
  const leftDiv = factoryService.createElement("div");
  const rightDiv = factoryService.createElement("div", {
    class: "inquiry-form-form",
  });
  const leftDivContent = factoryService.createElement("div", {
    class: "inquiry-form-content",
  });

  const title = factoryService.createElement("h2", {
    text: inquiryFormData.title,
  });
  const text = factoryService.createElement("p", {
    text: inquiryFormData.text,
  });

  const formTitle = factoryService.createElement("h2", {
    text: inquiryFormData.form.title,
  });
  const formText = factoryService.createElement("p", {
    text: inquiryFormData.form.text,
  });
  const form = inquiryForm(inquiryFormData.form);
  const button = linkComponent(
    inquiryFormData.button.text,
    inquiryFormData.button.action,
    undefined,
    true,
  );

  factoryService.placeElement([
    { element: title, position: leftDivContent },
    { element: text, position: leftDivContent },
    { element: leftDivContent, position: leftDiv },
    { element: formTitle, position: rightDiv },
    { element: formText, position: rightDiv },
    { element: form, position: rightDiv },
    { element: button, position: rightDiv },
    { element: leftDiv, position: shell },
    { element: rightDiv, position: shell },
    { element: shell, position: inquiryFormSect },
  ]);
}