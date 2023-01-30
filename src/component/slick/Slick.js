
import Slider from "react-slick";
import Api from "../api-comments/Api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.scss";

const Slick = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const DUMMY_COMMENT = {
    first: "Wyjazd był udany, obsługa 10/10.",
    second: "Podobało mi sie, na pewno wróce.",
    third: "Na wyspie zombi udało mi sie przeżyć.",
    fourth: "Zawsze chciałem poznać wyspy covid.",
    fifth: "Nie warto brać obiadokolacji.",
  };
  

  return (
    <div>
      <h2 className="section-heading">Opinie</h2>
      <Slider {...settings}>
        <Api comment={DUMMY_COMMENT.first} />
        <Api comment={DUMMY_COMMENT.second} />
        <Api comment={DUMMY_COMMENT.third} />
        <Api comment={DUMMY_COMMENT.fourth} />
        <Api comment={DUMMY_COMMENT.fifth} />
        <Api comment={DUMMY_COMMENT.second} />
        <Api comment={DUMMY_COMMENT.fourth} />
      </Slider>
    </div>
  );
};

export default Slick;
