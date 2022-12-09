// call random number hook so we can use the number in the button click function

export default function ImagesDisplay() {
    const [number, generateRandom] = useRandomNumber(min, max);
    const []
  
    function handleClickJumper(min, max) {
      const id = generateRandom(min, max); //?
      
      const url = "https://localhost:3000/jumper/" + { id };
  
    }
  
    return (
      <>
        <HeadImage />
        <JumperImage />
        <Button onClick={X}/>
        <Button onClick={x}/>
      </>
    );
  }
  