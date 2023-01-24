import React from "react";

import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import NavLiks from "./NavLinks";

import "./MobileNav.scss";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState("");

  const showNav = () =>{
    setToggle(!toggle)
    if(toggle ===true){
      setWidth('50px')
    }else{
      setWidth('500px')
    }
  }

  return (
    <div className="burger">
      <Hamburger
        onClick={() => {
          showNav(!setShowNav);
        }}
        toggled={isOpen}
        toggle={setOpen}
      />
      {showNav && <NavLiks />}
    </div>
  );
};

export default Nav;
