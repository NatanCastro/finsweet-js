import { inquiryFormData } from "../data/home/inquiry-form.js";
import { createElement } from "../factory/create-element.factory.js";
import { placeElement } from "../factory/place-element.factory.js";
/**
 * @param {typeof inquiryFormData.form} formData
 * @returns {HTMLFormElement}
 */
export function inquiryForm(formData) {
  const form = createElement("form");
  const nameLabel = createElement("label", {
    text: formData.name.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.name.id,
      },
    ],
  });
  const nameInput = createElement("input", {
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
  const emailLabel = createElement("label", {
    text: formData.email.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.email.id,
      },
    ],
  });
  const emailInput = createElement("input", {
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
  const figmaLabel = createElement("label", {
    text: formData.figma.placeholder,
    class: "sr-only",
    attrs: [
      {
        key: "for",
        value: formData.figma.id,
      },
    ],
  });
  const figmaInput = createElement("input", {
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
  const button = createElement("button", {
    text: "Send an Inquiry",
  });

  placeElement(nameLabel, form);
  placeElement(nameInput, form);
  placeElement(emailLabel, form);
  placeElement(emailInput, form);
  placeElement(figmaLabel, form);
  placeElement(figmaInput, form);
  placeElement(button, form);
  return form;
}