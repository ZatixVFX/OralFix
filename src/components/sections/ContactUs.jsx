import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import JulianneAbbot from "../../assets/julianne-abbott.jpg";
import KristyTarin from "../../assets/kristy-tarin.webp";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Sending Message",
      success: "Message Sent",
      error: "Promise rejected 🤯",
    });
  };
  return (
    <>
      <section className="p-5 px-3">
        <ToastContainer />
        <Container fluid="lg">
          <Row lg={2} xs={1}>
            <Col>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Book Appointment
              </h2>
              <Form
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-once="true"
                onSubmit={onSubmit}
              >
                <Row xs={2} className="gy-3">
                  <Col>
                    <Form.Group className="" controlId="Name">
                      <Form.Control type="text" size="lg" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="" controlId="Email">
                      <Form.Control
                        type="email"
                        size="lg"
                        placeholder="Email"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="" controlId="ContactNumber">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Contact Number"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="" controlId="Country">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Country"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="my-3" controlId="Country">
                  <Form.Control
                    as="textarea"
                    size="lg"
                    rows={3}
                    placeholder="Message"
                  />
                </Form.Group>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col className="pt-lg-0 pt-5">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
                className="text-primary"
              >
                Testimonial
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-once="true"
                className="fw-bolder pb-4"
              >
                What Our Patients Say About Us
              </h1>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-once="true"
                controls={false}
              >
                <Carousel.Item interval={9000} className="mb-5 px-sm-5 px-0">
                  <Card className="mx-auto mb-5 card-shadow">
                    <Card.Body>
                      <Card.Text className="fs-5">
                        {
                          '"Thrilled with my dental implants! The process was seamless, and my smile has never looked better"'
                        }
                      </Card.Text>
                    </Card.Body>
                    <Container className="d-flex pb-4">
                      <Image
                        src={JulianneAbbot}
                        style={{ width: "auto", height: "100px" }}
                        rounded
                      />
                      <div className="ps-3">
                        <h5 className="text-primary">Julianne Abbot</h5>
                        <p>Patient</p>
                      </div>
                    </Container>
                  </Card>
                </Carousel.Item>
                <Carousel.Item interval={9000} className="mb-5 px-sm-5 px-0">
                  <Card className="mx-auto mb-5 card-shadow">
                    <Card.Body>
                      <Card.Text className="fs-5">
                        {
                          '"Absolutely thrilled with my teeth whitening! My smile is brighter than ever, and the service was excellent"'
                        }
                      </Card.Text>
                    </Card.Body>
                    <Container className="d-flex pb-4">
                      <Image
                        src={KristyTarin}
                        style={{ width: "auto", height: "100px" }}
                        rounded
                      />
                      <div className="ps-3">
                        <h5 className="text-primary">Kristy Tarin</h5>
                        <p>Patient</p>
                      </div>
                    </Container>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
