import React from "react";
import { unstable_createResource } from "react-cache";
import Typography from "@material-ui/core/Typography";

const ChuckNorrisResource = unstable_createResource(async id => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  return response.json();
});

const ChuckNorrisQuote = ({ id }) => (
  <Typography align="left">{ChuckNorrisResource.read(id).value}</Typography>
);

export default ChuckNorrisQuote;
