import { useState } from "react";

export default async function useFetch(url) {
  const [image, setImage] = useState("image");

  async function getImage() {
    const response = await fetch(url);

    const data = await response.json();

    console.log("data from button fetch request:", data);

    setImage(data);
  }

  return [image, getImage];
}
