import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import carousel1 from "../../assets/home/carousel1.png";
import carousel2 from "../../assets/home/carousel2.png";
import carousel3 from "../../assets/home/carousel3.png";

const Carousels: React.FC = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        interval={3000}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
      >
        <div className="carouselDiv">
          <img src={carousel1} className="carousel-image" />
        </div>
        <div className="carouselDiv">
          <img src={carousel2} className="carousel-image" />
        </div>
        <div className="carouselDiv">
          <img src={carousel3} className="carousel-image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
