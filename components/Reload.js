import { useContext } from "react";
import styles from "../styles/Reload.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { QuoteContext } from "./QuoteProvider";
import axios from "axios";

export default function Reload() {

  const [quote, setQuote] = useContext(QuoteContext);

  const reload = async () => {    
    const res = await axios.get("https://api.kanye.rest/");
    setQuote(res.data.quote);
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
