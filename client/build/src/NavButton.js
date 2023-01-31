import { nav } from "./Router.js";

customElements.define("nav-button", class NavButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.append(document.getElementById("nav-button-tpl").content.cloneNode(true));
    }
    
    connectedCallback() {
        this.shadowRoot.addEventListener("click", () => {
            nav(this.getAttribute("to"));
        });
    }

});