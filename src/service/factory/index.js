import { createElement, placeElement } from "/factory/index.js";

export const factoryService = {
  /**
   * @param {{position: HTMLElement, element: HTMLElement}[]} data
   */
  placeElement(data) {
    placeElement(data);
  },

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
    return createElement(tag, values);
  },
};