import "./App.css";

import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
// import Button from "./components/Button/Button";
// import ToggleButton from "./components/ToggleButton/ToggleButton";

// import ImagesDisplay from "./components/ImageDisplay/ImageDisplay";

// import Headpic from "./components/ImageDisplay/HeadPic/HeadPic";
import JumperPic from "./components/ImageDisplay/JumperPic/JumperPic";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <JumperPic />
      <Instructions></Instructions>

      {/* <ImagesDisplay /> */}
    </div>
  );
}

export default App;
