import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ImgOne from "../../assets/landing_page/landing-page-img-1.webp";
import ImgTwo from "../../assets/landing_page/landing-page-img-2.webp";
import ImgThree from "../../assets/landing_page/landing-page-img-3.webp";
import ImgFour from "../../assets/landing_page/landing-page-img-4.webp";
import StarFill from "react-bootstrap-icons/dist/icons/star-fill";
import Logos from "./Logos";

const Home = () => {
  return (
    <section className="p-5  px-3 " id="home">
      <Container fluid="lg" className="pb-4">
        <Row lg={2} sm={1}>
          <Col lg={6} className="py-lg-5 pb-5">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="main-header fw-bold"
            >
              Seeing the dentist just got cooler
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1700"
              data-aos-once="true"
              className="lead fs-4"
            >
              Brighten your smile and boost your confidence with our gentle and
              expert dental care
            </p>

            <Button
              as="a"
              href="#footer"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="500"
              className="me-3 p-2 fs-4 fw-semibold"
              size="lg"
              style={{ borderRadius: "4px" }}
            >
              Book Now
            </Button>
            <Button
              as="a"
              className="p-2 fs-4 fw-semibold"
              href="#about-us"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="500"
              size="lg"
              variant="outline-primary"
              style={{ borderRadius: "4px" }}
            >
              About us
            </Button>
          </Col>
          <Col lg={6} className="d-flex justify-content-center p-0">
            <Row className="justify-content-center">
              <Col className="mb-4 mb-lg-0">
                <Image
                  src={ImgOne}
                  alt="ImgOne"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="500"
                  className="w-100 mb-4 big-image img-one"
                />
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="1000"
                  className="img-wrapper img-two"
                >
                  <Image
                    src={ImgTwo}
                    alt="placeholder img"
                    className="w-100 small-image"
                  />
                  <div className="img-overlay d-flex align-items-center justify-content-center flex-column text-center text-white">
                    <h2>
                      Qaulified
                      <br />
                      Team
                    </h2>
                  </div>
                </div>
              </Col>

              <Col className="mb-4 mb-lg-0">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="700"
                  className="img-wrapper img-three"
                >
                  <Image
                    src={ImgThree}
                    alt="placeholder img"
                    className="w-100 mb-4 small-image"
                  />
                  <div className="img-overlay d-flex align-items-center justify-content-center flex-column text-center text-white">
                    <h2>
                      Precise
                      <br />
                      Treatment
                    </h2>
                  </div>
                </div>
                <Image
                  src={ImgFour}
                  alt="placeholder img"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="900"
                  className="w-100 big-image img-four"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
        className="text-center pb-0 mt-3 px-0"
      >
        <p className="lead fs-4">
          Our customers say{" "}
          {Array(5)
            .fill(1)
            .map((id) => (
              <StarFill key={id} className="text-primary" />
            ))}{" "}
          4.8/5.0 (2k review)
        </p>
      </Container>
      <Container className="px-0">
        <div className="logos">
          <div className="logo_items">
            <Logos />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
