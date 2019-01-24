import React from "react";
import { unstable_createResource } from "react-cache";

const ChuckNorrisResource = unstable_createResource(async id => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  return response.json();
});

const ChuckNorrisQuote = ({ id }) => {
  return <p>{ChuckNorrisResource.read(id).value}</p>;
};

export default ChuckNorrisQuote;
