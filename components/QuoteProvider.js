import { createContext, useState } from "react";
import axios from "axios";

export const QuoteContext = createContext();

export default function QuoteProvider({ children }) {
  const [quote, setQuote] = useState("");

  return (
    <QuoteContext.Provider value={[quote, setQuote]}>
      {children}
    </QuoteContext.Provider>
  );
}

export async function getQuote() {
  const res = await axios.get("https://api.kanye.rest/");
  return res.data.quote;
}
