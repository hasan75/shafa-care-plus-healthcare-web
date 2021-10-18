import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const BottomBanner = () => {
    return (
        <div className="my-3 bg-secondary">
            <Container fluid className=" bg-opacity-25 p-3">
                <Row>
                    <Col>
                        <h2 className="fw-bold text-white">168</h2>
                        <p className="text-warning">Successfull Operations</p>
                    </Col>
                    <Col>
                        <h2 className="fw-bold text-white">7400</h2>
                        <p className="text-warning">Happy People</p>
                    </Col>
                    <Col>
                        <h2 className="fw-bold text-white">210</h2>
                        <p className="text-warning">Award Winning</p>
                    </Col>
                    <Col>
                        <h2 className="fw-bold text-white">500</h2>
                        <p className="text-warning">Emergency Vehicles Service</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BottomBanner;