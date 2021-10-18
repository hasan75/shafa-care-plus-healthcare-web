import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { selectedService, remove, setSelectedService } = useAuth();
  const history = useHistory();
  const totalPrice = selectedService.reduce(
    (total, service) => total + service.fees,
    0
  );

  return (
    <div className="my-4">
      <Container>
        {selectedService.length ? (
          <Row>
            <Col md={8}>
              {selectedService.map((service) => {
                const { img, key, title, detail, rating, ratingCount, fees } =
                service;

                return (
                  <Row className="my-2 bg-primary bg-opacity-50 p-2 rounded-2" key={key}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{detail}</p>
                      <h4>Fees: {fees}</h4>
                      <Row>
                        <Col sm={4}>
                          <Col>
                            <Rating
                              initialRating={rating}
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
                            <span>{rating}</span>
                          </Col>
                          <Col>Total review {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/services/${key}`}
                              className="btn btn-primary w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(key)}
                              className="btn btn-primary  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center" md={4}>
              <h4>Total {selectedService.length} Services selected</h4>
              <h6>Total Fees: {totalPrice.toFixed(2)} $</h6>

              <button
                onClick={() => {
                  alert("This for purchasing");
                  localStorage.setItem("cart", JSON.stringify([]));
                  setSelectedService([]);
                  history.push("/home");
                }}
                className="btn btn-primary"
              >
                Check Out with The Services
              </button>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Service Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
