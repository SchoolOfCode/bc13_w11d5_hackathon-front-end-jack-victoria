import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

// call random number hook so we can use the number in the button click function

export default function ImagesDisplay() {
    // const [number, generateRandom] = useRandomNumber(min, max);
    const [headState, setHeadState] = useState("")
    const [jumperState, setJumperState] = useState("")
    
    function handleClickJumper(max) {
        const [,, generateRandom] = useRandomNumber(max)
      const picID = generateRandom(); 
      const url = "https://localhost:3000/jumper/" + { picID };
    const [data] = useFetch(url)
    setJumperState(data);
    }

    function handleClickHead(max) {
        const [,, generateRandom] = useRandomNumber(max)
      const picID = generateRandom(); 
      const url = "https://localhost:3000/jumper/" + { picID };
    const [data] = useFetch(url)
    setHeadState(data);
    }
  
    return (
      <>
        <HeadImage />
        <JumperImage />
        <Button onClick={handleClickJumper} serving="Jumper"/>
        <Button onClick={handleClickHead} serving="Head"/>
      </>
    );
  }
  