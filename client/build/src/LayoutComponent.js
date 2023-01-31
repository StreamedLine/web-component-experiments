import { router } from "./Router.js";

export class RootComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.append(document.getElementById("layout-tpl").content.cloneNode(true));
    }    

    connectedCallback() {
        router.registerRoot(this);
    }
}   
customElements.define("root-component", RootComponent);

customElements.define("header-nav", class HeaderNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.append(document.getElementById("header-nav-tpl").content.cloneNode(true))
    }
})