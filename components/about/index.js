import { CustomElement } from "../components.js";
const templateHtml = fetch("components/about/template.html");

class AboutMe extends CustomElement {
  async connectedCallback() {
    let res = await templateHtml;
    let template = await res.text();
    this.render("div", template);
  }
}
export default () => customElements.define("about-me", AboutMe);
