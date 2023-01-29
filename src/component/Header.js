import React from "react";

import { Fragment } from "react";

import Nav from "./UI/MobileNav";
import Button from "./UI/Button";

import "./Header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header section">
        <Nav/>
        <div className="shadow"></div>
        <div class="white-block white-block-left"></div>
        <h1 className="header__title">Tropical Island</h1>
        <p className="header__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button />
      </header>
    </Fragment>
  );
};

export default Header;
