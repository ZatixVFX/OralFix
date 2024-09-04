import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Facebook from "react-bootstrap-icons/dist/icons/facebook";
import Instagram from "react-bootstrap-icons/dist/icons/instagram";
import Twitter from "react-bootstrap-icons/dist/icons/twitter-x";
import LinkedIn from "react-bootstrap-icons/dist/icons/linkedin";
import GeoAlt from "react-bootstrap-icons/dist/icons/geo-alt";
import Telephone from "react-bootstrap-icons/dist/icons/telephone";
import Envelope from "react-bootstrap-icons/dist/icons/envelope";
import OralFix from "../../assets/Oral-Fix.svg";

const Footer = () => {
  return (
    <footer className="p-5 px-2 text-white bg-primary">
      <Container>
        <Row lg={3} md={1} xs={1} className="gx-5 gy-4 justify-content-evenly">
          <Col lg={3}>
            <Image
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
              src={OralFix}
              style={{ width: "auto", height: "50px" }}
            />
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
              className="py-4 fs-5"
            >
              Get in touch with us through our social media accounts
            </p>
            <ul
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-once="true"
              className="socials ps-0"
            >
              <li>
                <a href="https://www.facebook.com">
                  <Facebook className="fs-4" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <Instagram className="fs-4" />
                </a>
              </li>
              <li>
                <a href="https://www.x.com">
                  <Twitter className="fs-4" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <LinkedIn className="fs-4" />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h2
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              Quick Link
            </h2>
            <ul
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-once="true"
              className="quick-link fs-5 ps-0 pt-2"
            >
              <li className="my-3">
                <a href="#home">Home</a>
              </li>
              <li className="my-3">
                <a href="#about-us">About Us</a>
              </li>
              <li className="my-3">
                <a href="#services">Services</a>
              </li>
              <li className="my-3">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </Col>

          <Col lg={3}>
            <h2
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              Contact Us
            </h2>
            <ul
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-once="true"
              className="quick-link fs-5 ps-0 pt-2"
            >
              <li className="my-3">
                <GeoAlt className="me-2" /> Oswald, New South
              </li>
              <li className="my-3">
                <Telephone className="me-2" /> (02) 4955 3474
              </li>
              <li className="my-3">
                <Envelope className="me-2" /> info@example.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
