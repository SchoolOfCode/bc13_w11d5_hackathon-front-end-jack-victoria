import {useState} from "react"

export default function useRandomNumber(min = 0, max = 100){
    const [number, setNumber] = useState(0);

        function generateRandom(){
            setNumber(Math.floor(Math.random() * (max-min)) + min);
        }
        return [number, generateRandom];
}