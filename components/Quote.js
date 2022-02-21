import styles from "../styles/Quote.module.css";
import { useState, useEffect, useContext } from "react";
import { getQuote, QuoteContext } from "./QuoteProvider";
import { ImageContext, pickRandomImage } from "./ImageProvider";
import Image from "next/image";

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useContext(QuoteContext);
  const [image, setImage] = useContext(ImageContext);

  useEffect(() => {
    async function fetchQuote() {
      setLoading(true);
      const quote = await getQuote();
      const imageName = await pickRandomImage(image);
      setQuote(quote);
      setImage(imageName);
      setLoading(false);
    }
    fetchQuote();
  }, []);

  if (!loading) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.quote_container}>
            <div className={styles.text_container}>
              <p>
                “
                {[".", "!", "?"].includes(quote[quote.length - 1])
                  ? quote
                  : quote + "."}
                ”
              </p>
              <br />
              <small>- Kanye West</small>
            </div>
            <div className={styles.image_container}>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="Kanye West"
              ></Image>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div className={styles.container}></div>;
  }
}
