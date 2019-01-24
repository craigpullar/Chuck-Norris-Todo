import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const DeleteButton = ({ onClick }) => (
  <Button onClick={onClick} color="secondary">
    delete
  </Button>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteButton;
