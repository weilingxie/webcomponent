import ReactDOM from "react-dom";
//import React from "react";
// import reactToWebComponent from "react-to-webcomponent";
import ReactCounter from "./react/ReactCounter";

class ReactToWC extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const increaseNumber = this.getAttribute("increaseNumber");

    ReactDOM.render(
      <ReactCounter increaseNumber={parseInt(increaseNumber)} />,
      mountPoint
    );
  }
}

customElements.define("react-counter", ReactToWC);

// customElements.define(
//   "react-counter",
//   reactToWebComponent(ReactCounter, React, ReactDOM)
// );
