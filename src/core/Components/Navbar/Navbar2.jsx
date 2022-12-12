import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import I18n from "../../../context/i18n/I18n";

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

class navBar extends Component {
  state = {
    bg: "transparent",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 25) {
      this.setState({ bg: "dark" });
    } else {
      this.setState({ bg: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <Navbar collapseOnSelect  expand="lg" bg={this.state.bg} 
      //sticky="top"
      >
        <Container>
          {/* <Navbar.Brand href="/" className="logo"> */}
          <I18n />
          {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={"/"} routerLinkActive="active" className='text-center text-lg-start text-muted'>
              <p className="text-white"><FormattedMessage id="app.home" /></p>
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} routerLinkActive="active" className='text-center text-lg-start text-muted'>
              <p className="text-white "><FormattedMessage id="app.contact" /></p>
              </Nav.Link>
              <Nav.Link as={Link} to={"/projects"} routerLinkActive="active" className='text-center text-lg-start text-muted'>
              <p className="text-white "><FormattedMessage id="app.projects" /></p>
              </Nav.Link>
              <Nav.Link as={Link} to={"/cv"} routerLinkActive="active" className='text-center text-lg-start text-muted'>
              <p className="text-white ">CV</p>
              </Nav.Link>
              <Nav.Link as={Link} to={"/stack"} className='text-center text-lg-start text-muted'>
              <p className="text-white ">Stack</p>
              </Nav.Link>
              {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default navBar;
