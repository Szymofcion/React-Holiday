import React, { Component } from "react";
import Slider from "react-slick";
import Api from "../api-comments/Api";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.scss";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };


    return (
      <div>
        <h2 className="section-heading">Opinie</h2>
        <Slider {...settings}>
          <Api  />
          <Api />
          <Api  /> 
          <Api />
          <Api  />
          <Api  />
          <Api  />
          <Api  />
          <Api  />
          <Api  />
          <Api  />
        </Slider>
      </div>
    );
  }
}
