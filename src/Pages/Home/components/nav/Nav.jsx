import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";

import "./nav.css";

const BsNav = () => {
  return (
    <Navbar className="nav-color" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavbarBrand href="#beranda">KostHunt</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/home" className="justify-content-end">
            <NavLink href="#hero">News</NavLink>
            <NavLink href="#produk">Produk</NavLink>
            <NavLink href="#why">Keunggulan</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BsNav;
