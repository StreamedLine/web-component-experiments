import { router } from "./Router.js";

export class RootComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.append(document.getElementById("root"));
    }    

    connectedCallback() {
        router.registerRoot(this);
    }
}   
customElements.define("root-component", RootComponent);