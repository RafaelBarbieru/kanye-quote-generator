import { createContext, useState } from "react";

export const ImageContext = createContext();

export default function ImageProvider({ children }) {

  const [image, setImage] = useState("/kanye00.jpeg")

  return <ImageContext.Provider value={[image, setImage]}>{children}</ImageContext.Provider>;
}

export async function pickRandomImage(image) {
  console.log(image);  
  let randomNumber = 0;
  let imageName = ''
  do {
    randomNumber = Math.floor(Math.random() * 3);
    imageName = "/kanye" + randomNumber + ".jpg";
  } while (imageName === image)
  console.log(imageName)
  return imageName;
}
