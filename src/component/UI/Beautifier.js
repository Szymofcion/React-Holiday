import { Fragment } from "react";

import "./Beautifier.scss";

const Beautifier = () => {
  return (
    <Fragment>
      <section class="hero-img section">
      <div class="white-block-beautifiler-right"></div>
        <p class="hero-img__title">Tropical Paradise</p>
        <hr />
        <p class="hero-img__text">Jedyne takie miejsce na ziemi</p>
        <hr />
        <div class="white-block-beautifiler-left"></div>
      </section>
    </Fragment>
  );
};

export default Beautifier;
