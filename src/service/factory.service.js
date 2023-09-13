import { placeElement } from "../factory/place-element.factory.js";
import { createElement } from "../factory/create-element.factory.js";

export class FactoryService {
  placeElementFactory;
  createElementFactory;
  /**
   * @param {typeof placeElement} placeElementFactory
   * @param {typeof createElement} createElementFactory
   */
  constructor(placeElementFactory, createElementFactory) {
    this.placeElementFactory = placeElementFactory;
    this.createElementFactory = createElementFactory;
  }

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} location
   */
  placeElement(element, location) {
    this.placeElementFactory(element, location);
  }

  /**
   * @param {keyof HTMLElementTagNameMap} tag
   * @param {{
   *   text: string
   *   class: string
   *   id: string
   *   attrs: {
   *     key: string
   *     value: string
   *   }[]
   * }} values
   * @returns {HTMLElement}
   */
  createElement(tag, values) {
    return this.createElementFactory(tag, values);
  }
}