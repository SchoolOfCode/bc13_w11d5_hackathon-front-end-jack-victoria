import useState from "react";

export default async function useFetch(url) {
  [image, setImage] = useState(null);

  const response = await fetch(url);

  const data = await response.json();

  console.log("data from button fetch request:", data);

  setImage(data);

  return [image];
}
