import "./App.css";

import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions"
import Button from "./components/Button/Button";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Instructions></Instructions>
        <Button serving="head" max = "9"/>
    <Button serving="jumper" max = "9"/> 
    </div>
  );
}

export default App;
