import useRandomNumber from "../../Hooks/useRandomNumber";

// BUTTON needs the folowing props when called: MAXIMUM , NAME (head/jumper)
export default function Button({ serving, max }) {
  const [pictureReference, setPictureReference] = useState("");

  // call random number hook so we can use the number in the button click function
  const [number, generateRandom] = useRandomNumber(min, max);

  function handleClick(min, max) {
    const id = generateRandom(min, max);
    const url = "https://localhost:3000/" + { id };
    async function getData() {
      const response = await fetch(url, {
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      console.log("data from button fetch request:", data);
    }
    getData();
  }

  return (
    <button onClick={handleClick} max={max}>
      Get New {serving}
    </button>
  );
}
