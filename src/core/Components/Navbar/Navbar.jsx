import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.scss';
import I18n from '../../../context/i18n/I18n';
import { IntlProvider, FormattedMessage } from "react-intl";

import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import text from '../../../assets/images/logoText.png';
import Avatar from "@mui/material/Avatar";
import logo4 from "../../../assets/images/logo.jpg";
const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="logo">
        OIT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" >
          <Nav.Link href="/contact"><FormattedMessage id="app.contact"/></Nav.Link>
          <Nav.Link href="/projects"><FormattedMessage id="app.projects"/></Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
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
          <Nav>
          
            <Nav.Link eventKey={2} href="#memes">
            <I18n/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Menu;
