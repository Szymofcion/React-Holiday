import { Route } from "react-router-dom";

import Header from "./component/Header";
import Dreams from "./component/Dreams";
import Beautifier from "./component/UI/Beautifier";
import Island from "./component/Island";
import Offers from "./component/Offers";
import Slick from "./component/slick/Slick";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Dreams />
      <Beautifier />
      <Island />
      <Offers />
      <Slick />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
