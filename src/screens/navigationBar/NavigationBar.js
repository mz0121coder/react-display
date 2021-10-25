import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => {
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>;
  });
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar expand="md">
        <Navbar.Brand href="#home">Mohammad Zafar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>{createLinks()}</Nav>
        <Navbar.Collapse></Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
