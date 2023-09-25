import { factoryService } from "/service/factory/index.js";
import { inquiryFormData } from "/data/index.js";

/**
 * @param {typeof inquiryFormData.form} formData
 * @returns {HTMLFormElement}
 */
export function inquiryForm(formData) {
  const form = factoryService.createElement("form");
  const nameLabel = factoryService.createElement("label", {
    text: formData.name.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.name.id,
      },
    ],
  });
  const nameInput = factoryService.createElement("input", {
    id: formData.name.id,
    attrs: [
      {
        key: "type",
        value: formData.name.type,
      },
      {
        key: "placeholder",
        value: formData.name.placeholder,
      },
      {
        key: "required",
      },
    ],
  });
  const emailLabel = factoryService.createElement("label", {
    text: formData.email.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.email.id,
      },
    ],
  });
  const emailInput = factoryService.createElement("input", {
    id: formData.email.id,
    attrs: [
      {
        key: "type",
        value: formData.email.type,
      },
      {
        key: "placeholder",
        value: formData.email.placeholder,
      },
      {
        key: "required",
      },
    ],
  });
  const figmaLabel = factoryService.createElement("label", {
    text: formData.figma.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.figma.id,
      },
    ],
  });
  const figmaInput = factoryService.createElement("input", {
    id: formData.figma.id,
    attrs: [
      {
        key: "type",
        value: formData.figma.type,
      },
      {
        key: "placeholder",
        value: formData.figma.placeholder,
      },
      {
        key: "required",
      },
      {
        key: "pattern",
        value:
          "^https://([w.-]+.)?figma.com/(file|proto)/([0-9a-zA-Z]{22,128})(?:/.*)?$",
      },
    ],
  });
  const button = factoryService.createElement("button", {
    text: "Send an Inquiry",
  });

  factoryService.placeElement([
    { element: nameLabel, position: form },
    { element: nameInput, position: form },
    { element: emailLabel, position: form },
    { element: emailInput, position: form },
    { element: figmaLabel, position: form },
    { element: figmaInput, position: form },
    { element: button, position: form },
  ]);
  return form;
}