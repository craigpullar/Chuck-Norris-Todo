import React from "react";
import Button from "@material-ui/core/Button";

const DeleteButton = ({ onClick }) => (
  <Button onClick={onClick} color="secondary">
    delete
  </Button>
);

export default DeleteButton;
