import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BrowserRouter, Link } from "react-router-dom";
import logo from '../assets/Logo.png';
import "../styles/homePageStyles.css";
import Signupmodal from './Signupmodal';
import CheckStatusWithoutLogin from './CheckaStatusWithoutLogin';

function Navs() {
  return (
    
      <Navbar expand="lg" className="navbar_bg">
        <Container fluid>
          <Navbar.Brand href="/home" className="logo_etpass">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="start"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logo} alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className='nav_links' as={Link} to="/" href="#action1">
                  HOME
                </Nav.Link>
                <NavDropdown
                  title="SERVICES"
                  id="offcanvasNavbarDropdown"
                  className="nav_links"
                >
                  <NavDropdown.Item as={Link} to="/" href="#action3">
                    LAISSEZ-PASSER SERVICE
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" href="#action3">
                    PASSPORT SERVICE
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" href="#action3">
                    VISA SERVICE
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" href="#action3">
                    ORIGIN ID SERVICE
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav_links' as={Link} to="" href="#action6">
                  CONTACT US
                </Nav.Link>
                <Nav.Link className='nav_links' href="#action4">
                  FAQs
                </Nav.Link>
                <Nav.Link className='nav_links font-bold' as={Link} to="/">
                  <CheckStatusWithoutLogin/>
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title="EN"
                  id="offcanvasNavbarDropdown-lang"
                  className="mt-2"
                >
                  <NavDropdown.Item href="#action7">AM</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/">
                  <button className='btn btn-md' style={{background:"#004A7F",color:"white"}}>
                  <Signupmodal id="sign-up-hero" className="hero-butn mt-5" />
                  </button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  );
}

export default Navs;