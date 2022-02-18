import React, { useState } from "react";
import Quote from "../components/Quote";
import Reload from "../components/Reload";
import QuoteProvider from "../components/QuoteProvider";
import ImageProvider from "../components/ImageProvider";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <QuoteProvider>
      <ImageProvider>
        <Reload />
        <Quote />
      </ImageProvider>
    </QuoteProvider>
  );
}
