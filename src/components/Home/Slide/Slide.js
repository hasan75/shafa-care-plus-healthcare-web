import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import img1 from '../../../images/hospital11.jpg'
import img2 from '../../../images/hospital2.jpg'
import img3 from '../../../images/hospital22.jpg'

const Slide = () => {
    return (
        <div>
            <Container fluid className="my-2">
             <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-2"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>All kind of Medical Services</h3>
                        <p>Here, all the doctros are ready to help you to take care of your health</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100 rounded-2"
                        src={img2}
                        alt="Second slide"
                     />

                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>Free Medicine</h3>
                        <p>You will get your medicines for free after an appointment is done</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded-2"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>Trust the Proffesionals</h3>
                        <p>You will get very professional Doctors for your treatments</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
            </Container>
        </div>
    );
};

export default Slide;