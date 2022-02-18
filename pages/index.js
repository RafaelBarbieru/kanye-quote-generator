import React, { useState } from "react";
import Quote from "../components/Quote";
import Reload from "../components/Reload";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Reload />
      <Quote />
    </>
  );
}
