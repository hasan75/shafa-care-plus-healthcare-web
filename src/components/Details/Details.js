import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Button from "@restart/ui/esm/Button";
import MatchedDoctor from "../MatchedDoctor/MatchedDoctor";

const Details = () => {
  const { key } = useParams();
  const { services, doctors, addToCart } = useAuth();
  const [serviceDoctors, setServiceDoctors] = useState([]);
  const history = useHistory();

  const matchingService = services.find((service) => service.key === Number(key));

  useEffect(()=>{
      const matchedDoctors = doctors?.filter(doctor => doctor.id === Number(key))
      setServiceDoctors(matchedDoctors)
  },[doctors]);

      //routing to service page using history api
      const handleButtonClick = () => {
        history.push('/services')
    }

      //fontAwesome icon
      const backIcon = <FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>

  return (
    <div className="my-4">
      {matchingService?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingService.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{matchingService.title}</h2>
              <h5>{matchingService.detail}</h5>
              <Row className="mt-5">
                <Col>
                  <h1>Fees:{matchingService.fees}$</h1>
                  <div className="my-2">
                    <Rating
                      initialRating={matchingService.rating}
                      readonly
                      emptySymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={emptyStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={fullStar}
                        />
                      }
                    />
                    <span> {matchingService.rating}</span>
                    <p className="mb-3">
                      Total Review: {matchingService.ratingCount}
                    </p>
                    <button
                      onClick={() => addToCart(matchingService)}
                      className="btn btn-primary  w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Col>
                <Col className="bg-secondary bg-opacity-25 rounded-2 fw-bold text-primary">
                  <div className="text-center pt-3">
                    <p className="mb-0">ShafaCare Plus carefully take care the services we provide.</p> <br />
                    <p>Every Services is being monitorized and handled by Proffesionals.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO Service Found</h1>
        </div>
      )}

<Container className="my-5">
            <h1 className="text-success   p-3">{serviceDoctors?.length} Doctors For this Service</h1>
                <div className="border border-2 border-warning mb-5">
                </div>
            <Row xs={1} md={3} className="g-4">
             
             {
                serviceDoctors?.map(serviceDoctor => <MatchedDoctor
                    key={serviceDoctor?._id}
                    serviceDoctor={serviceDoctor}>
                </MatchedDoctor>)
             }
            
            </Row>
                <Button className="my-5 btn btn-outline-success" onClick={handleButtonClick}>{backIcon} Back to All Services </Button>
            </Container>
    </div>
  );
};

export default Details;
