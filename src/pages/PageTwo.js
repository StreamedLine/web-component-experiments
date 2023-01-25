import { router } from "../Router.js";

class PageTwo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.append(document.getElementById("two").content.cloneNode(true));
    }
}
customElements.define("comp-two", PageTwo);

router.addRoute(["/two", PageTwo]);
