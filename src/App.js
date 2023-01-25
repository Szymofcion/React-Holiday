import Header from "./component/Header";
import Dreams from "./component/Dreams";
import Beautifier from "./component/UI/Beautifier";
import Island from "./component/Island";
import Offers from "./component/Offers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Dreams />
      <Beautifier />
      <Island />
      <Offers/>
    
    </div>
  );
}

export default App;
