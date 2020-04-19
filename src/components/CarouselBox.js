import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselBox () {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                    src="close.jpg"
                    alt="Close"
                />
                <Carousel.Caption>
                    <h3>jvuygb</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="first"
                    src="product.jpg"
                    alt="Close"
                />
                <Carousel.Caption>
                    <h3>jvuygb</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="first"
                    src="close.jpg"
                    alt="Close"
                />
                <Carousel.Caption>
                    <h3>jvuygb</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      
     
    );
}


export default CarouselBox;

