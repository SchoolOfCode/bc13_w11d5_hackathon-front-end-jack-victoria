import useState from "react"

 export default async function useFetch(url) {
    [output, setOutput] = useState(null);

      const response = await fetch(url, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      console.log("data from button fetch request:", data);
      setOutput(data)
      return data;
    }
 
  