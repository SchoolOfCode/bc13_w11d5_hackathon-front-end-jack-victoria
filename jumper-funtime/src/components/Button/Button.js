import useRandomNumber from "../../Hooks/useRandomNumber";

// BUTTON needs the folowing props when called: MAXIMUM , NAME (head/jumper)
export default function Button({ serving, max }) {
  


  return (
    <button onClick={handleClick} max={max}>
      Get New {serving}
    </button>
  );
}
