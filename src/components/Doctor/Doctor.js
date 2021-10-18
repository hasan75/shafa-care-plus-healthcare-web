import React from "react";
import { Card, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Button from "@restart/ui/esm/Button";
import './Doctor.css'

const Doctor = ({ doctor }) => {
  const { name, age, email, fees,picture,dept } = doctor;



  return (
    <Col sm={12} md={6} lg={4}>
      <Zoom>
        <div className="m-2">
        <Card>
               <Card.Img className="doctor-img" variant="" src={picture} />
                <Card.Body>
                 <Card.Title className="text-primary fw-bold fs-3"></Card.Title>
                 <Card.Text>
                     <h5><span className="text-success fw-bold">{name} </span></h5>
                     <h5>Department: {dept}</h5>
                     <p>Age: {age} </p>
                     <p> Email: {email}</p>
                     <h4> Fees: <span className="text-danger fw-bold">${fees} </span> </h4>
                 </Card.Text>
                 <Button variant="outline-success" class="btn btn-outline-success"> Contact Me</Button>
                </Card.Body>
             </Card>
        </div>
      </Zoom>
    </Col>
  );
};

export default Doctor;
