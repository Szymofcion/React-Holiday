import { Fragment, useState } from "react";
import "./NavLinks.scss";

const NavLinks = () => {

  return (
    <Fragment>
      
      <ul className="nav">
        <li>
          <a className="nav__link" href="/Wyspy">
            Wyspy
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/home">
            home
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavLinks;
