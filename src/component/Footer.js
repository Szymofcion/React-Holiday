import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
  let data;
  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    data = year;
  };

  handleCurrentYear();
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__boxes">
          <div className="footer__box">
            <h3 className="footer__box-title">fajna ikona wakacji</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias dolore odio ex consequatur optio earum.
            </p>
            <div className="footer__box-social">
              <a className="footer__box-link" href="">
                <BsFacebook />
              </a>
              <a className="footer__box-link" href="">
                <BsTwitter />
              </a>
              <a className="footer__box-link" href="">
                <BsInstagram />
              </a>
            </div>
          </div>
          <p className="number-text">
            <BsFillTelephoneFill /> +48 643 453 344
          </p>
          <hr />
          <p className="bottom-text">{data} Tropical Island</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
