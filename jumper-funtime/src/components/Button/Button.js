import useRandomNumber from "../../Hooks/useRandomNumber";

// BUTTON needs the folowing props when called: MAXIMUM , NAME (head/jumper)
export default function Button({ serving, onClick}) {
  
  return (
    <button onClick={onClick} max={max}>
      Get New {serving}
    </button>
  );
}
