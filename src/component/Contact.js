import { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [counter = 0, setCounter = 150] = useState(0);

  const messageCounter = (e) => {
    setCounter(e.target.value.length);
  };

  return (
    <div className="wrapper">
      <h2 className="section-heading"> Kontakt</h2>
      <section className="contact" id="contact">
        <form className="contact__form">
          <div className="contact__form-top">
            <label className="contact__form-label">Imie i nazwisko:</label>
            <input className="contact__form-input" type="text" />
            <label htmlFor="email" className="contact__form-label">
              Adres e-mail:
            </label>
            <input type="text" className="contact__form-input" id="email" />
            <label htmlFor="msg" className="contact__form-label">
              Wiadmość
            </label>
          </div>
          <textarea
            className="contact__form-textarea"
            id="msg"
            cols="30"
            rows="10"
            maxLength="150"
            onChange={messageCounter}
          />
          <p className="counter">{counter} / 150</p>
          <div className="btn-form-container">
            <button type="submit" className="contact__form-btn">
              Wyślij
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
