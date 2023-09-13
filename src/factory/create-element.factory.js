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
export function createElement(tag, values) {
  const element = document.createElement(tag);

  if (!values) return element;

  if (values.text) {
    element.innerText = values.text;
  }
  if (values.class) {
    element.classList.add(values.class);
  }
  if (values.id) {
    element.setAttribute("id", values.id);
  }
  if (values.attrs) {
    values.attrs.forEach((attr) => element.setAttribute(attr.key, attr.value));
  }

  return element;
}