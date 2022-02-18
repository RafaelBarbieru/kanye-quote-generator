import { createContext, useState } from "react";

export const ImageContext = createContext();

export default function ImageProvider({ children }) {

  const [image, setImage] = useState("/kanye00.jpeg")

  return <ImageContext.Provider value={[image, setImage]}>{children}</ImageContext.Provider>;
}

export function pickRandomImage() {
  const randomNumber = Math.floor(Math.random() * 2);
  const imageName = "/kanye" + randomNumber + ".jpeg";
  console.log(imageName)
  return imageName;
}
