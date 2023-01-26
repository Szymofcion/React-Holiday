import React, { Component } from "react";
import Slider from "react-slick";
import Api from "../api-comments/Api";
import Osoba from "../img/Opinie2_1920.jpg";

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
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    const name = "Jakaś Osoba";
    const img = Osoba;
    return (
      <div>
        <h2 className="section-heading">Opinie</h2>
        <Slider {...settings}>
          <Api name={name} img={Osoba} />
          <Api name={name} img={Osoba} />
          <Api name={name} img={Osoba} /> 
          <Api name={name} img={Osoba} />
          <Api name={name} img={Osoba} />
        </Slider>
      </div>
    );
  }
}
