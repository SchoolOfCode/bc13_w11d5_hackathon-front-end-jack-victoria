// if(head==="stephanie -> img src)
import React from "react";
import "./HeadPic.css";
import fardosa from "./fardosa.png";
import gabe from "./gabe.png";
import ian from "./ian.png";
import jack from "./jack.png";
import julio from "./julio.png";
import lani from "./lani.png";
import patrick from "./p-stew.png";
import stephanie from "./stephanie.png";
import victoria from "./victoria.png";
import useFetch from "../../../Hooks/useFetch";

function Headpic() {
  const [image, setImage] = useState(fardosa);

  return <img src={image} alt="bootcamper" />;
}

export default Headpic;
