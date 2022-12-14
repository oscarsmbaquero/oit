import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import React, { Component } from "react";
import I18n from '../../../context/i18n/I18n';
import logo from '../../../assets/images/logo.jpg';
import './Navbar.scss'

function OffcanvasExample() {
  
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand > <I18n /></Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}` }>
                  <img src={logo} className="header__logo" alt={logo} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <NavLink as={Link} to={"/"} className="custom-link" active><FormattedMessage id="app.home" /></NavLink>
                  <NavLink as={Link} to={"/contact"} className="custom-link"><FormattedMessage id="app.contact" /></NavLink>
                  <NavLink as={Link} to={"/projects"} className="custom-link"><FormattedMessage id="app.projects" /></NavLink>
                  <NavLink as={Link} to={"/cv"} className="custom-link">Cv</NavLink>
                  <NavLink as={Link} to={"/stack"} className="custom-link">Stack</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;