import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useInputValue } from "../../libs/hooks";

const AddItemInput = ({ addItem }) => {
  const { value, onChange } = useInputValue();

  return (
    <Grid container style={{ padding: 40 }} direction="column" justify="center">
      <Typography variant="h4">Add Item</Typography>
      <Grid container justify="center" style={{ padding: 20 }}>
        <Input type="text" value={value} onChange={onChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addItem(value);
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
