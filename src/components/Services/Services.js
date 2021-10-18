import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Slide from "react-reveal/Slide";
import Service from "../Service/Service";

const Services = () => {
  const { services } = useAuth();

  return (
    <div className="py-5 bg-dark">
      <div className="text-center text-white">
        <Slide left>
          <h1> Our All Services</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            At this moment, you will be provided <span className="text-warning fw-bold fs-5">{services.length}</span> services by ShafaCare Plus.
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {services.map((service) => (
              <Service key={service.key} service={service} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;