import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';


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
          </Nav>
            <NavLink href="/login"><button className="btn btn-primary btn-sm w-4">Login</button></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
