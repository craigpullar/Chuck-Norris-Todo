import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ChuckNorrisQuote from "../chuck-norris-quote";

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
          <Button
            onClick={() => {
              removeItem({ keyToRemove: itemKey });
            }}
            color="secondary"
          >
            delete
          </Button>
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
