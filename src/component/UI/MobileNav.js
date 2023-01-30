import React from "react";

import { useState } from "react";
import Hamburger from "hamburger-react";
import NavLiks from "./NavLinks";

import "./MobileNav.scss";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="burger">
      <button className="btn">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      {isOpen && <NavLiks />}
    </div>
  );
};

export default Nav;
