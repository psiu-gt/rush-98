import "./images/rushlogo.png";
import "./images/rushflyer.png";
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

/**
 * The typing effect will only trigger on the first time
 * the page is viewed.
 */
// Commented out this feature, not sure if useful. May delete in the future.
// const introPlayed = !!localStorage.getItem("introPlayed");
// if (!introPlayed) {

// } else {
//   $("#skip-intro").hide();
//   $("#typing").hide();
//   $("#content").show();
//   appendReact();
// }

/** Click handler to skip the typing intro. */
$("#skip-intro").click(() => {
  hideIntroAndShowContent();
});

const typed = new Typed("#typing", options);

function typingEnded() {
  setTimeout(() => hideIntroAndShowContent(), 500);
}

/** Unhide the main content. */
function hideIntroAndShowContent() {
  $("#skip-intro").fadeOut(1000);
  $("#typing").fadeOut(1000, () => {
    $("#content").fadeIn(1000);
  });
  appendReact();
}

/** Append the React component. */
function appendReact() {
  const domContainer = document.querySelector("#discord");
  ReactDOM.render(React.createElement(Discord), domContainer);
  localStorage.setItem("introPlayed", true);
}
