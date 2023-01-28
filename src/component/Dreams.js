import Boat from "./img/boat_640.jpg";
import Hawaii from "./img/hawaii_640.jpg";
import Maldives from "./img/maldives4_640.jpg";
import "./Dreams.scss";

const Dreams = () => {
  return (
    <main className="dreams">
      <div className="wrapper">
        <h2 className="section-heading"> Spełniaj marzenia</h2>
        <div className="grid-container">
          <div className="dreams__box left1">
            <div className="dreams__box-img">
              <img src={Boat} alt="palma, zachód słońca,plaża" />
            </div>
            <div className="dreams__box-text ">
              <h3 className="dreams__title">Wymarzone wakacje</h3>
              <p className="dreams__text">
                Hotel jak z bajki, w kolonialnym stylu, zachwyca elegancją i
                bogactwem. Fantastyczne baseny, w tym infinity z widokiem na
                ocean, profesjonalne centrum spa oraz serwis na najwyższym
                poziomie gwarantowany przez sieć R2.
              </p>
            </div>
          </div>
          <div className="dreams__box right2">
            <div className="dreams__box-img">
              <img src={Hawaii} alt="palma, zachód słońca,plaża" />
            </div>
            <div className="dreams__box-text">
              <h3 className="dreams__title">Wspaniale spedzony czas</h3>
              <p className="dreams__text">
                Hotel jak z bajki, w kolonialnym stylu, zachwyca elegancją i
                bogactwem. Fantastyczne baseny, w tym infinity z widokiem na
                ocean, profesjonalne centrum spa oraz serwis na najwyższym
                poziomie gwarantowany przez sieć R2.
              </p>
            </div>
          </div>
          <div className="dreams__box left3">
            <div className="dreams__box-img">
              <img src={Maldives} alt="palma, zachód słońca,plaża" />
            </div>
            <div className="dreams__box-text">
              <h3 className="dreams__title">Niezapomniane przygody</h3>
              <p className="dreams__text">
                Hotel jak z bajki, w kolonialnym stylu, zachwyca elegancją i
                bogactwem. Fantastyczne baseny, w tym infinity z widokiem na
                ocean, profesjonalne centrum spa oraz serwis na najwyższym
                poziomie gwarantowany przez sieć R2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dreams;
