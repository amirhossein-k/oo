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
          <div className="back-fade">
            {" "}
            <span className="title">Amir Gallery</span>
          </div>
          <div className="back-fade my-2" style={{ background: "#adb5bd57" }}>
            <span className="tagline">
              A mystery person
              <a href="">anthony.russel42@example.com</a>
            </span>
          </div>
        </h1>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">اتو امیر</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">صفحه اصلی</Nav.Link>
              <Nav.Link href="#pricing">درباره ما</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">لیست ماشین ها</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
