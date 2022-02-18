import Image from "next/image";
import styles from "../styles/Quote.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { QuoteContext } from "./QuoteProvider";

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useContext(QuoteContext);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get("https://api.kanye.rest/");
    setQuote(res.data.quote);
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.quote_container}>
            <div className={styles.text_container}>
              <p>“{quote}”</p>
              <br />
              <small>- Kanye West</small>
            </div>
            <div className={styles.image_container}>
              <Image
                download
                src="/kanye01.jpeg"
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
