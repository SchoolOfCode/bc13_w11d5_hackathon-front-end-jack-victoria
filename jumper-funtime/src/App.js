import "./App.css";
import Button from "./components/Button/Button";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {


  return (
    <div>
      <h1 className="App-logo">JUMPER FUNTIME! (spinning in progress) </h1>;
      <ImageDisplay/>
  <Button serving="head" max = "9"/>
  {/* <Button serving="jumper" max = "9"/> */}
  <Instructions/>
  <ToggleButton/>
    </div>
  );
}

export default App;
