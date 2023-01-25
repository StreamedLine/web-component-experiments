import { router } from "../Router.js";

class PageOne extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.append(document.getElementById("one").content.cloneNode(true));
    }
}
customElements.define("comp-one", PageOne);

router.addRoute(["/one", PageOne]);