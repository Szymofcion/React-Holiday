import { Fragment, useState } from "react";
import "./NavLinks.scss";

const NavLinks = () => {

  return (
    <Fragment>
      
      <ul className="nav">
        <li>
          <a className="nav__link" href="/home">
            home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/islands">
            wyspy
          </a>
        </li>
        <li>
          <a className="nav__link" href="/offers">
            oferty
          </a>
        </li>
        <li>
          <a className="nav__link" href="/contact">
            kontakt
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavLinks;
