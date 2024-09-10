import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import AboutUsImage from "../../assets/about-us.webp";

const AboutUs = () => {
  return (
    <>
      <section className="p-5 px-2" id="about-us">
        <Container fluid="lg">
          <Row lg={2} md={2} xs={1} className="d-flex align-items-center">
            <Col className="pe-3 pb-4 pb-lg-0">
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
                className="img-wrapper"
              >
                <Image src={AboutUsImage} alt="about-us-image" fluid rounded />
                <div className="about-us-overlay text-white p-lg-5 pt-lg-3 pt-sm-1 rounded">
                  <p className="fs-1 mb-lg-0 mb-sm-2 mb-2 fw-medium">100+</p>
                  <span className="lead fs-5 fw-medium">Professionals</span>
                </div>
              </div>
            </Col>
            <Col className="About-Us">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
                className="text-primary"
              >
                About Us
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-once="true"
                className="fw-bolder"
              >
                Helping you achieve your dream smile
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-once="true"
                className="lead fs-4"
              >
                At OralFix, we’re dedicated to enhancing your smile with
                cutting-edge technology and compassionate care. Our expert team
                offers personalized dental solutions to ensure a healthy,
                radiant smile for every patient. Your comfort is our priority.
              </p>
              <Button
                as="a"
                href="#contact-us"
                data-aos="zoom-in"
                data-aos-duration="1800"
                data-aos-once="true"
                className="me-3 p-2 px-4 fs-4 fw-semibold"
                size="lg"
                style={{ borderRadius: "4px" }}
                id="services"
              >
                Contact Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
