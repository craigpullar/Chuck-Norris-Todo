import { useState, useEffect } from "react";

const getQuoteFromApi = async ({ setQuote }) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const quoteData = await response.json();
  setQuote(quoteData.value);
};

const useQuoteFromApi = ({ setQuote }) => {
  useEffect(() => {
    getQuoteFromApi({ setQuote });
  }, []);
};

export const useQuote = () => {
  const [quote, setQuote] = useState("");

  useQuoteFromApi({ setQuote });

  return {
    quote
  };
};
