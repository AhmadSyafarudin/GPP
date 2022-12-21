import React from "react";
import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";

import "./menu.css";

const Menu = () => {
  return (
    <Navbar className="nav-color" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavbarBrand href="#beranda">KostHunt</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/home" className="justify-content-end">
            <NavLink href="#hero">News</NavLink>
            <NavLink href="#produk">Kosan</NavLink>
            <NavLink href="#reason">Promo</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </Nav>
            <NavLink href="/login"><button className="btn btn-primary btn-sm w-4">Login</button></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
