import React, { Suspense } from "react";
import useFetch from "fetch-suspense";

const FetchingComponent = () => {
  const quote = useFetch("https://api.chucknorris.io/jokes/random");
  return <i>{quote.value}</i>;
};
const ChuckNorrisQuote = () => {
  return (
    <Suspense fallback="Loading your chuck norris quote...">
      <FetchingComponent />
    </Suspense>
  );
};

export default ChuckNorrisQuote;
