import React from "react";
import "./header.css";
import Typed from "react-typed";

function Header() {
  return (
    <div className="main-info">
      <h1>Welcome to my Portfolio</h1>
      <Typed
        strings={[" ", "Frontend Developer", "Trader", "Coder", " ", " "]}
        typeSpeed={40}
        backSpeed={50}
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
}

export default Header;
