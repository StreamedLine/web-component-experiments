import { router } from "../Router.js";

class PageOne extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.append(document.getElementById("page-one-tpl").content.cloneNode(true));
    }
}
customElements.define("page-one", PageOne);

router.addRoute(["/one", PageOne]);