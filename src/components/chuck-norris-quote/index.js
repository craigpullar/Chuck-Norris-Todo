import React, { useState, useEffect } from "react";
const getQuoteFromApi = async ({ setQuote }) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const quoteData = await response.json();
  setQuote(quoteData.value);
};

const ChuckNorrisQuote = ({ query }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuoteFromApi({ setQuote });
  }, []);

  return <i>{quote}</i>;
};

export default ChuckNorrisQuote;
