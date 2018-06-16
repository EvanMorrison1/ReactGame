import React from "react";
import "../styles/Header.css";
const Header = () => (
  <header className = "header">
    <div className="jumbotron">
  <h1 className="display-4">Clicky Game</h1>
  <p className="lead">Click an image to earn points, but click the same image more than once and the game restarts.</p>
</div>
  </header>
);

export default Header;