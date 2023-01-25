import { nav } from "./Router.js";

customElements.define("nav-button", class NavButton extends HTMLButtonElement {
    constructor() {
        super();
        this.nav = nav;
    }
    
    connectedCallback() {
        this.addEventListener("click", () => {
            this.nav(this.getAttribute("to"));
        });
    }

}, {extends: "button"});