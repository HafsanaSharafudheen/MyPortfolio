import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function MyNavbar() {
    return (
        <Navbar expand="md"  variant="dark" className="p-3">
          <Container>
            <Navbar.Brand href="/">
              <img src="/logo.jpeg" alt="Logo" width={80} height={80} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyNavbar