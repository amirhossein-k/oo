import React, { useRef, useState } from "react";
import { Card, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [metr, setMetr] = useState("");
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var navlist = document.getElementById("navbar");
    if (window.pageYOffset > metr) {
      navlist.classList.add("sticky");
    } else {
      navlist.classList.remove("sticky");
    }
  }
  return (
    <header
      id="header"
      ref={(el) => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if (!el) return;

        console.log(el.getBoundingClientRect().bottom); // prints 200px
        setMetr(el.getBoundingClientRect().bottom);
      }}
    >
      <div
        id="head"
        className="parallax d-flex align-items-center justify-content-center"
        parallax-speed="2"
      >
        <h1
          id="logo"
          className="text-center d-flex flex-column justify-content-center align-items-center"
        >
          <img
            className="img-circle "
            src="https://res.cloudinary.com/dijamrzud/image/upload/v1668860640/bxrni1yl3nxxhmvdawrn.jpg"
            alt=""
          />
          <span className="title">Amir Gallery</span>
          <span className="tagline">
            A mystery person
            <a href="">anthony.russel42@example.com</a>
          </span>
        </h1>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
