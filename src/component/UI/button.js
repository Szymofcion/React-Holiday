import React from "react";

import "./Button.scss";

const Button = (props) => {
  const simpleText = "poznaj oferte";
  const choose = "wybierz";
  return <a className="button" href="#offers">{simpleText}</a>;
};

export default Button;
