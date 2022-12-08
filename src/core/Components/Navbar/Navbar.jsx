import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">OIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" >
          <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Brand href="/">Acceso Personal</Navbar.Brand>
          {/* <Nav>
            <Nav.Link href="#deets">Area Personal</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Menu;
