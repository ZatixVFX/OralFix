import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ServicesList } from "./ServicesList";
import ArrowUpRight from "react-bootstrap-icons/dist/icons/arrow-up-right-circle-fill";
import DentistRoom from "../../assets/services/dentist_room.webp";
import Dentist from "../../assets/services/dentist.webp";
import Consultation from "../../assets/services/consultation.webp";

const Services = () => {
  return (
    <>
      <section className="p-5 px-2">
        <Container fluid="lg" className="text-center pb-4">
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="true"
            className="text-primary pb-1"
          >
            Dental Care You Will Love
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-once="true"
            className="fw-bolder"
          >
            Dental Services In Relaxed Judgement-Free Environment
          </h1>
        </Container>
        <Container fluid="lg">
          <Row lg={3} md={2} sm={2} xs={1}>
            {ServicesList.map((data, id) => (
              <>
                <Col className="py-2" key={data.id}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    data-aos-once="true"
                    className="card-wrapper"
                  >
                    <Card className="px-4 py-1 card-shadow d-block">
                      <Card.Title>
                        <Image
                          src={data.icon}
                          alt={data.name}
                          fluid
                          className="p-2"
                        />
                      </Card.Title>
                      <Card.Body className="py-0">
                        <p className="lead">{data.description}</p>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-between bg-transparent">
                        <h4 className="fw-semibold">{data.name}</h4>
                        <p className="lead">USD {data.price}</p>
                      </Card.Footer>
                    </Card>
                    <a
                      href="#contact-us"
                      className="overlay d-flex justify-content-center"
                    >
                      <ArrowUpRight
                        className="fs-1 text-white "
                        style={{ width: "70px", height: "auto" }}
                      />
                    </a>
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
      <section className="p-5 px-2">
        <Container fluid="lg" className="pb-4">
          <Row md={2} sm={1} xs={1} className="align-items-center">
            <Col>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
                className="text-primary"
              >
                Why choose us?
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-once="true"
                className="fw-bolder"
              >
                You deserve the best dental care
              </h1>
            </Col>
            <Col className="text-md-end text-start">
              <Button
                as="a"
                href="#contact-us"
                data-aos="zoom-in"
                data-aos-duration="1400"
                data-aos-once="true"
                className="fs-3"
              >
                Get Qoute
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid="lg">
          <Row lg={3} sm={2} xs={1} className="gy-4">
            <Col>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                className="img-wrapper"
              >
                <Image
                  src={DentistRoom}
                  style={{ width: "100%", height: "400px" }}
                  rounded
                />
                <div className="bottom-overlay d-flex align-items-center  px-5 px-sm-4 rounded">
                  <h4 className="text-white fw-normal ">
                    Home like amenties To Make You Comfortable
                  </h4>
                </div>
              </div>
            </Col>
            <Col>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
                className="img-wrapper"
              >
                <Image
                  src={Dentist}
                  style={{ width: "100%", height: "400px" }}
                  rounded
                />
                <div className="bottom-overlay d-flex align-items-center  px-5 px-sm-4 rounded">
                  <h4 className="text-white fw-normal ">
                    Judgemental-Free Dental Care In Cost Effective Fees
                  </h4>
                </div>
              </div>
            </Col>
            <Col>
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                data-aos-once="true"
                className="img-wrapper"
              >
                <Image
                  src={Consultation}
                  style={{ width: "100%", height: "400px" }}
                  rounded
                />
                <div className="bottom-overlay d-flex align-items-center px-5 px-sm-4 rounded">
                  <h4 className="text-white fw-normal" id="contact-us">
                    Expert care In An Inviting Atmosphere
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
