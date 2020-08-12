import "./images/rushlogo.png";
import "./pdf/rushflyer.pdf";
import "./styles/index.scss";
import "@themesberg/windows-95-ui-kit/js/w95";
import Typed from "typed.js";
import Discord from "./js/discord.jsx";
import ReactDOM from "react-dom";
import React from "react";

/** Lines that are typed to create the terminal effect. */
const options = {
  strings: [
    `<i>Oh,</i> Hello There! <br><br> 
    Due to unfortunate circumstances<br>
    <i>(that I\'m sure you are well aware of)</i> <br> 
    We are conducting rush over the <b>World Wide Web!</b><br>
    Come and join us on the information superhighway!`,
  ],
  typeSpeed: 30,
  onComplete: () => typingEnded(),
};

const typed = new Typed("#typing", options);

/** Unhide the main content and append the React component. */
function typingEnded() {
  const content = document.querySelector("#content");
  content.classList.add("faded-out");

  const domContainer = document.querySelector("#discord");
  ReactDOM.render(React.createElement(Discord), domContainer);
}
