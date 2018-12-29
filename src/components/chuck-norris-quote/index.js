import React from "react";
import { useQuote } from "./hooks";

const ChuckNorrisQuote = () => {
  const { quote } = useQuote();

  return <i>{quote}</i>;
};

export default ChuckNorrisQuote;
