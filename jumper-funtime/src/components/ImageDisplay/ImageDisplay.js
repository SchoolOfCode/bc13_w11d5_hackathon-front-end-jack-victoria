import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Headpic from "./HeadPic/HeadPic";


// NEW PLAN
//Do a full get request


export default function ImagesDisplay() {
  // const [number, generateRandom] = useRandomNumber(min, max);
  const [jumperState, setJumperState] = useState("");
  const [headState, setHeadState] = useState("");
  const max = 9;
 
  const headFetchArray = useFetch("https://localhost:3000/head/");
  setHeadState(headFetchArray);

  const jumperFetch = useFetch("https://localhost:3000/jumper/");
  setHeadState(jumperFetch);
  console.log(headState)

  // usefetch to get all data from ONE table
  // pull math.random

  //   function handleClickJumper(max) {
  //     const [, , generateRandom] = useRandomNumber(max);
  //     const picID = generateRandom();
  //     const url = "https://localhost:3000/jumper/" + { picID };
  //     const [data] = useFetch(url);
  //     setJumperState(data);
  //   }

  //   function handleClickHead(max) {
  //     const [, , generateRandom] = useRandomNumber(max);
  //     const picID = generateRandom();
  //     const url = "https://localhost:3000/jumper/" + { picID };
  //     const [data] = useFetch(url);
  //     setHeadState(data);
  //   }

  return (
    <>
      <HeadPic source={headState}/>
      <JumperImage />
      <Button onClick={handleClickJumper} serving="Jumper" />
      <Button onClick={handleClickHead} serving="Head" />
    </>
  );
}
