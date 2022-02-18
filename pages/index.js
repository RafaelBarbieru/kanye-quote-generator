import React, { useState } from "react";
import Quote from "../components/Quote";
import Reload from "../components/Reload";
import QuoteProvider from "../components/QuoteProvider";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <QuoteProvider>
      <Reload />
      <Quote />
    </QuoteProvider>
  );
}
