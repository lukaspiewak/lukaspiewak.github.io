export class CustomElement extends HTMLElement {
  async render(tag, template) {
    const element = document.createElement(tag);
    element.innerHTML = template;
    this.appendChild(element);
  }
}
