import React from "react";

import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import NavLiks from "./NavLinks";

import "./MobileNav.scss";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="burger">
      <button className="btn">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <NavLiks />}
      </button>
    </div>
  );
};

export default Nav;
