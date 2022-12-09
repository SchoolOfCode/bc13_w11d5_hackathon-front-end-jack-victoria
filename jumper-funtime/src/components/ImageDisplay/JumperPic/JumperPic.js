import React from "react";
import useFetch from "../../../Hooks/useFetch";

function JumperPic() {
  const [image, getImage] = useFetch("http://localhost:3005/jumpers");

  return (
    <>
      <img src={image} alt={"christmas jumper"} />;
      <button
        onClick={() => {
          getImage();
        }}
      >
        New Jumper
      </button>
    </>
  );
}

export default JumperPic;
