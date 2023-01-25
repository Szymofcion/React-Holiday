import "./Island.scss";

const Island = () => {
  return (
    <section className="islands">
      <h2 className="section-heading">Polecane Wyspy</h2>
      <div className="islands__card">
        <div className="shadow"></div>
        <div className="islands__card-img  islands__card-img--first">
          <h3 className="islands__card--title">Wyspa Darii</h3>
          <p className="islands__card--info">Więcej informacji</p>
        </div>
        <div class="islands__card-info">
          <h3 class="islands__card-info--title">Wyspy Darii</h3>
          <ul class="islands__card-info-list">
            <li class="islands__card-info-list-item">Piekna okolica</li>
            <li class="islands__card-info-list-item">Ciepła woda</li>
            <li class="islands__card-info-list-item">Wysoka temperatura</li>
            <li class="islands__card-info-list-item">Spora ilość zieleni</li>
            <li class="islands__card-info-list-item">Wielkie palmy</li>
          </ul>
          <button class="islands__card-info-btn btn-special-animation">
            Wybierz
          </button>
        </div>
      </div>
      <div className="islands__card">
        <div className="shadow"></div>
        <div className="islands__card-img  islands__card-img--second">
          <h3 className="islands__card--title">Wyspa Covid</h3>
          <p className="islands__card--info">Więcej informacji</p>
        </div>
        <div class="islands__card-info">
          <h3 class="islands__card-info--title">Wyspy Covid</h3>
          <ul class="islands__card-info-list">
            <li class="islands__card-info-list-item">Pewny respirator</li>
            <li class="islands__card-info-list-item">Swieże powietrze</li>
            <li class="islands__card-info-list-item">Możliwość zarażenia</li>
            <li class="islands__card-info-list-item">Spora ilość zieleni</li>
            <li class="islands__card-info-list-item">
              Animatorzy w kostiumach wirusa
            </li>
          </ul>
          <button class="islands__card-info-btn btn-special-animation">
            Wybierz
          </button>
        </div>
      </div>
      <div className="islands__card">
        <div className="shadow"></div>
        <div className="islands__card-img  islands__card-img--third">
          <h3 className="islands__card--title">Wyspa Zombie</h3>
          <p className="islands__card--info">Więcej informacji</p>
        </div>
        <div class="islands__card-info">
          <h3 class="islands__card-info--title">Wyspa Zombie</h3>
          <ul class="islands__card-info-list">
            <li class="islands__card-info-list-item">Swieże mózgi</li>
            <li class="islands__card-info-list-item">Ciepła woda</li>
            <li class="islands__card-info-list-item">Poszarpane stroje</li>
            <li class="islands__card-info-list-item">Duzy wybór broni</li>
            <li class="islands__card-info-list-item">Bon na zarażenie</li>
          </ul>
          <button class="islands__card-info-btn btn-special-animation">
            Wybierz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Island;
