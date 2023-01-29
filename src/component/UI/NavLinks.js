import { Fragment, useState } from "react";
import "./NavLinks.scss";

const NavLinks = () => {

  return (
    <Fragment>
      
      <ul className="nav">
        <li>
          <a className="nav__link" href="/Wyspy">
            home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            wyspy
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            oferty
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            kontakt
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavLinks;
