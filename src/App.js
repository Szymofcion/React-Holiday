import Header from "./component/Header";
import Dreams from "./component/Dreams";
import Beautifier from "./component/UI/Beautifier";
import Island from "./component/Island";
import Offers from "./component/Offers";
import AutoPlay from "./component/slick/Slick";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Dreams />
      <Beautifier />
      <Island />
      <Offers />
      <AutoPlay />
      <Island />
    </div>
  );
}

export default App;
