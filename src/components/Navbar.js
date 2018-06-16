import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav className="navbar">
    <ul>
    <li className="brand animated lightSpeedIn">
    <a href="/clicky-game/">{props.title}</a>
  </li>

  <li id="rw">{props.rightWrong}</li>

  <li id="cur-sco">Current Score: {props.score}</li>

  <li id="top-sco">Top Score: {props.topScore}</li>
      </ul>
  </nav>
);

export default Navbar;
