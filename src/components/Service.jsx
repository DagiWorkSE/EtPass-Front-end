import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import visa from "../assets/visa.png";
import approved from "../assets/approved.png";
import passport from "../assets/passport.png";
import logo from "../assets/logo.png";
import ethiopia from "../assets/ethiopia.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="slider-section">
        <div className="service-card">
          <Cards
            img1={passport}
            img2={approved}
            title="Visa Service"
            detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iste velit cum harum in enim. Voluptatibus, nulla est illum pariatur"
          />
        </div>
        <div className="service-card">
          <Cards
            img1={visa}
            img2={approved}
            title="Passport Service"
            detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iste velit cum harum in enim. Voluptatibus, nulla est illum pariatur"
          />
        </div>
        <div className="service-card">
          <Cards
            img1={logo}
            img2={approved}
            title="Visa Service"
            detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iste velit cum harum in enim. Voluptatibus, nulla est illum pariatur"
          />
        </div>
        <div className="service-card">
          <Cards
            img1={ethiopia}
            img2={approved}
            title="Visa Service"
            detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iste velit cum harum in enim. Voluptatibus, nulla est illum pariatur"
          />
        </div>
        <div className="service-card">
          <Cards
            img1={passport}
            img2={approved}
            title="Visa Service"
            detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, iste velit cum harum in enim. Voluptatibus, nulla est illum pariatur"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Service;