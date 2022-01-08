const template = document.createElement("template");
let content = `<div class="user-card">
                <img />
                <h3></h3>
                <div class="info">
                    <p><slot name="email" /></p>
                    <p><slot name="phone" /></p>
                </div>
                <button id="toggle-info">Hide Info</button>
               </div>
              `;
template.innerHTML = content;
const cardStyle = `
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
`;
const imgStyle = `width: 100%;`;
const buttonStyle = `
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
`;
class UserCard extends HTMLElement {
    constructor(){
        super();
        this.showDetail = true;
        //Create shadow DOM
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        let card = this.shadowRoot.querySelector(".user-card");
        card.style.cssText = cardStyle;
        let title = this.shadowRoot.querySelector("h3");
        title.innerText = `${this.getAttribute("name")}`;
        let img = this.shadowRoot.querySelector("img");
        img.src = `${this.getAttribute("avatar")}`;
        img.style.cssText = imgStyle;
        let btn = this.shadowRoot.querySelector("button");
        btn.style.cssText = buttonStyle;
    }
    toggleInfo() {
        this.showDetail = !this.showDetail;
        const info = this.shadowRoot.querySelector(".info");
        const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        if (this.showDetail) {
            info.style.display = "block";
            toggleBtn.innerText = "Hide Detail";
        } else {
            info.style.display = "none";
            toggleBtn.innerText = "Show Detail";
        }
    }
    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", ()=>this.toggleInfo()
        );
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
    }
}
window.customElements.define("user-card", UserCard);

//# sourceMappingURL=index.a020eb12.js.map
