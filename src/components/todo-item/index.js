import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ChuckNorrisQuote from "../chuck-norris-quote";
import DeleteButton from "./delete-button";

const ToDoItem = ({ value, removeItem, itemKey }) => (
  <Paper style={{ padding: 20 }}>
    <Grid container>
      <Grid item xs={10} style={{ paddingBottom: 10 }}>
        <Typography align="left" variant="h4">
          {value}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        {itemKey && (
          <DeleteButton
            onClick={() => {
              removeItem({ keyToRemove: itemKey });
            }}
          />
        )}
      </Grid>
      <Suspense fallback="Loading your chuck norris quote...">
        <ChuckNorrisQuote key={itemKey} id={itemKey} />
      </Suspense>
    </Grid>
  </Paper>
);

ToDoItem.propTypes = {
  value: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ToDoItem;
