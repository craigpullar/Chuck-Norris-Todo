import React from "react";
import Grid from "@material-ui/core/Grid";
import ToDoItem from "../todo-item";
import AddItemInput from "../add-item-input";
import { useItems } from "./hooks";

const ToDoList = () => {
  const { items, addItem, removeItem } = useItems();

  return (
    <Grid>
      <AddItemInput addItem={addItem} />
      <Grid container spacing={24} justify="center" direction="column">
        {items.map(({ value, key }, index) => {
          return (
            <Grid item>
              <ToDoItem
                value={value}
                removeItem={removeItem}
                itemKey={key}
                key={key}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ToDoList;
