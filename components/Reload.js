import { useContext } from "react";
import styles from "../styles/Reload.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { QuoteContext, getQuote } from "./QuoteProvider";
import { ImageContext, pickRandomImage } from "./ImageProvider";

export default function Reload() {

  const [quote, setQuote] = useContext(QuoteContext);
  const [image, setImage] = useContext(ImageContext);

  const reload = async () => {   
    const quote = await getQuote() 
    setQuote(quote)
    setImage(pickRandomImage())
  };

  return (
    <div className={styles.reload_container}>
      <FontAwesomeIcon
        icon={faArrowsRotate}
        className={styles.reload}
        onClick={reload}
        title="Generate new quote"
      />
    </div>
  );
}
