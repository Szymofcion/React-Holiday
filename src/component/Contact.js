const Contact = () => {
  return (
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
        />
        <button type="submit" className="contact__form-btn">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default Contact;
