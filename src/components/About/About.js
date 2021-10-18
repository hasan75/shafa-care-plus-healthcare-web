import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./About.css"
import featuredImg from '../../images/featured-image.jpg'

import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      className="py-5 about"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-dark mb-4">
            About ShafaCare Plus
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-dark">About Us</h5>
              <p className="text-muted">
              ShafaCare Plus Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Shafa Care is one of the ventures of Square Group which is the top business group of the country.
              
              </p>
              <p className="text-muted">
              The reputation of Shafa Care is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Shafa Care strives to meet patients’ standards through quality healthcare and making a difference in their lives.
              </p>
              <p className="text-muted">
              The goal of the hodsital is :
              Adhering to high ethical and moral standards at all times
              Making service quality top priority in all we do.
              Training staff to work within a quality care environment.
              Providing quality health care service in all processes.
              Delivering customer satisfaction through quality service.
              The outpatient department (OPD) of the hospital can serve	Up to 2500 patients daily
              Open daily, except Friday
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <div className="mb-3">
                  <img src={featuredImg} alt="" srcset="" />
              </div>
              <h5 className="text-dark">Our Vision</h5>
              <p className="text-muted">
                <ul>
                    <li>To be on a planet devoid of the distressed and the diseased;</li>
                    <li>To be at the level where help is sought to save lives;</li>
                    <li>To be an institution that rises above pettiness to help humanity;</li>
                </ul>
              </p>
              <h5 className="text-dark  pt-1">Our Mission</h5>
              <p className="text-muted">
                    To become the most trusted premier institution serving the sufferings of humanity and people’s welfare oriented activities.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-dark">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and health updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-dark">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
