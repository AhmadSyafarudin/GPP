import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";

import "./header.css";

const Header = () => {
  return (
    <Navbar className="nav-color" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavbarBrand href="/">KostHunt</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/home" className="justify-content-end">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/login">Admin</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
