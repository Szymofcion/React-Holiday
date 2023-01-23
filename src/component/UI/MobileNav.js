import React from "react";

import { useState } from "react";
import Hamburger from "hamburger-react";


import "./Nav.scss";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const openNav = () => {};

  return (
    <div className="burger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default Nav;
