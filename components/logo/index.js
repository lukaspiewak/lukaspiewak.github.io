import { CustomElement } from "../components.js";
const templateHtml = fetch("components/logo/template.html");

class Logo extends CustomElement {
  async connectedCallback() {
    let res = await templateHtml;
    let template = await res.text();
    this.render("div", template);
  }
}
export default () => customElements.define("logo-lukens", Logo);
