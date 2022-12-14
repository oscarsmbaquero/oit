import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
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
            <Navbar.Brand > <I18n /></Navbar.Brand>
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
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to={"/"}><p><FormattedMessage id="app.home" /></p></Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}><p><FormattedMessage id="app.contact" /></p></Nav.Link>
                  <Nav.Link as={Link} to={"/projects"}><p><FormattedMessage id="app.projects" /></p></Nav.Link>
                  <Nav.Link as={Link} to={"/cv"}><p>Cv</p></Nav.Link>
                  <Nav.Link as={Link} to={"/stack"}><p>Stack</p></Nav.Link>
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