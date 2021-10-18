import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';

const MatchedDoctor = (props) => {
    const {name, age, email, fees,picture,dept} = props?.serviceDoctor;



    return (
        <div>
            <Col>
             <Card>
               <Card.Img className="teacher-img" variant="" src={picture} />
                <Card.Body>
                 <Card.Title className="text-primary fw-bold fs-3"></Card.Title>
                 <Card.Text>
                     <h5><span className="text-success fw-bold">{name} </span></h5>
                     <h5>Department: {dept}</h5>
                     <p>Age: {age} </p>
                     <p> Email: {email}</p>
                     <h4> Fees: <span className="text-danger fw-bold">${fees} </span> </h4>
                 </Card.Text>
                 <Button variant="outline-success"> Contact Me</Button>
                </Card.Body>
             </Card>
            </Col>
        </div>
    );
};

export default MatchedDoctor;