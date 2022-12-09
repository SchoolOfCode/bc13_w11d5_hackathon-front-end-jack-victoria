import React from "react";
import useFetch from "../../../Hooks/useFetch";

function JumperPic() {
  const [image] = useFetch("http://localhost:3005/jumpers");

  return (
    <>
      <img src={image} alt={"christmas jumper"} />;
      <button onClick={useFetch}>New Jumper</button>
    </>
  );
}

export default JumperPic;
