import React from "react";

import { Fragment } from "react";

import Button from "./UI/Button";

import "./Header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header section">
        <div className="shadow"></div>
        <h1 class="header__title">Tropical Island</h1>
        <p class="header__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button />
        <div class="white-block white-block-left"></div>
      </header>
    </Fragment>
  );
};

export default Header;
