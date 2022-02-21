import "../styles/globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kanye Quote Generator</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Generates a random Kanye West Quote from his Tweeter" />
        <meta name="keywords" content="Kanye West, Kanye, Ye, Kanye Quotes, Kanye Twitter" />
        <meta name="author" content="Rafael Barbieru" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
