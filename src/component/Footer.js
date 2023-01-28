

import "./Footer.scss";

const Footer = () => {
  let data;
  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    data = year;
  };

  handleCurrentYear()
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__boxes">
          <div className="footer__box">
            <h3 className="footer__box-title">fajna ikona wakacji</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias dolore odio ex consequatur optio earum, aliquam incidunt
              voluptatibus quaerat facere?
            </p>
            <div className="footer__box-social">
              <a className="footer__box-link" href="">
                FB
              </a>
              <a className="footer__box-link" href="">
                Twitter
              </a>
              <a className="footer__box-link" href="">
                Instagram
              </a>
            </div>
          </div>
          <hr />

          <p className="bottom-text">{data} Tropical Island</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
