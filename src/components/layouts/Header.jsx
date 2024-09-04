import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Image from "react-bootstrap/Image";
import OralFix from "../../assets/OralFix.svg";

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top">
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <Image
              src={OralFix}
              fluid
              style={{ width: "auto", height: "40px" }}
              alt="OralFix Image"
            />
          </Navbar.Brand>
          <NavbarToggle></NavbarToggle>
          <NavbarCollapse>
            <Nav className="ms-auto header align-items-center fs-5">
              <Nav.Link href="#home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#about-us" className="text-dark">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="text-dark">
                Services
              </Nav.Link>
              <Nav.Link href="#contact-us" className="text-dark">
                Contact Us
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
