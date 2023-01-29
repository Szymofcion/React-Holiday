import bubble from "./img/bubbles1_640.jpg";
import bonfire from "./img/bonfire3_640.jpg";
import beach from "./img/beach3_640.jpg";

import "./Offers.scss";

const Offers = () => {
  return (
    <section className="offers">
      <div class="white-block-beautifiler-right"></div>
      <h2 className="section-heading">Oferty</h2>

      <div className="wrapper">
        <div className="offers__box">
          <div className="offers__option">
            <img src={bubble} alt="" class="offers__option-img" />
          </div>
          <div class="offers__option-info">
            <h3 class="offers__option-heading">Wyjazd z dziecmi</h3>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis deserunt nesciunt voluptas facilis incidunt cupiditate
              assumenda sed fugit dolor quasi.
            </p>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button class="offers__option-btn btn-special-animation">
              Wybierz
            </button>
          </div>
        </div>
        <div className="offers__box change">
          <div className="offers__option">
            <img src={beach} alt="" class="offers__option-img" />
          </div>
          <div class="offers__option-info">
            <h3 class="offers__option-heading">Wyjazd z dziecmi</h3>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis deserunt nesciunt voluptas facilis incidunt cupiditate
              assumenda sed fugit dolor quasi.
            </p>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button class="offers__option-btn btn-special-animation">
              Wybierz
            </button>
          </div>
        </div>
        <div className="offers__box">
          <div className="offers__option">
            <img src={bonfire} alt="" class="offers__option-img" />
          </div>
          <div class="offers__option-info">
            <h3 class="offers__option-heading">Wyjazd z dziecmi</h3>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis deserunt nesciunt voluptas facilis incidunt cupiditate
              assumenda sed fugit dolor quasi.
            </p>
            <p class="offers__option-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button class="offers__option-btn btn-special-animation">
              Wybierz
            </button>
          </div>
        </div>
      </div>
      <div class="white-block-beautifiler-left"></div>
    </section>
  );
};

export default Offers;
