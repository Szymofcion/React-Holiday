import { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [counter=0, setCounter=150] = useState(0);

const messageCounter =(e)=>{
  console.log(e.target.value.length);
  
  
}

  return (
    <div className="wrapper">
      <h2 className="section-heading"> Kontakt</h2>
      <section className="contact">
        <form className="contact__form">
          <div className="contact__form-top">
            <label className="contact__form-label" htmlFor="">
              Imie i nazwisko:
            </label>
            <input className="contact__form-input" type="text" />
            <label for="email" className="contact__form-label">
              Adres e-mail:
            </label>
            <input type="text" className="contact__form-input" id="email" />
            <label for="msg" className="contact__form-label">
              Wiadmość
            </label>
          </div>
          <textarea
            className="contact__form-textarea"
            id="msg"
            cols="30"
            rows="10"
            maxlength="150"
            onChange={messageCounter}
          />
          <button type="submit" className="contact__form-btn">
            Wyślij
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
