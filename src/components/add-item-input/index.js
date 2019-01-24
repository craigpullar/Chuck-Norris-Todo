import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { useInputValue } from "../../libs/hooks";

const AddItemInput = ({ addItem }) => {
  const { value, onChange, clearValue } = useInputValue();

  return (
    <Grid container style={{ padding: 40 }} direction="column" justify="center">
      <Grid container justify="center" style={{ padding: 20 }}>
        <Input type="text" value={value} onChange={onChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addItem(value);
            clearValue();
          }}
          style={{ marginLeft: 10 }}
        >
          Add +
        </Button>
      </Grid>
    </Grid>
  );
};

AddItemInput.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItemInput;
