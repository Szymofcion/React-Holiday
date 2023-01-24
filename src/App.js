import Header from "./component/Header";
import Dreams from "./component/Dreams";
import Beautifier from "./component/UI/Beautifier";
import Island from "./component/Island";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Dreams />
      <Beautifier />
      <Island />
    </div>
  );
}

export default App;
