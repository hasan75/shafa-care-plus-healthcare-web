import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Slide from "react-reveal/Slide";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const { doctors } = useAuth();

  return (
    <div className="py-5 bg-dark">
      <div className="text-center text-white">
        <Slide left>
          <h1> Our Professional Doctors</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            At this moment, you will be provided <span className="text-warning fw-bold fs-5">{doctors.length}</span> Doctors by ShafaCare Plus.
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {doctors.map((doctor) => (
              <Doctor key={doctor._id} doctor={doctor} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Doctors;