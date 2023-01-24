import Header from "./component/Header";
import Dreams from "./component/Dreams";
import Beautifier from './component/UI/Beautifier'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Dreams />
      <Beautifier/>
      <Dreams />
    </div>
  );
}

export default App;
