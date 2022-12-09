// call random number hook so we can use the number in the button click function
const [number, generateRandom] = useRandomNumber(min, max);

  function handleClick(min, max) {
    const id = generateRandom(min, max); //?
    
    
    const url = "https://localhost:3000/" + { id };

    async function getData() {
      const response = await fetch(url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      console.log("data from button fetch request:", data);
      return data;
    }
    const finalData = getData();
    return finalData;
  }

