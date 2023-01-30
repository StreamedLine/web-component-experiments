import { router } from "../Router.js";

class PageTwo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.append(document.getElementById("page-two-tpl").content.cloneNode(true));
    }
}
customElements.define("page-two", PageTwo);

router.addRoute(["/two", PageTwo]);
