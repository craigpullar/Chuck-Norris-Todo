import React from "react";
import ToDoItem from "../todo-item";
import AddItemInput from "../add-item-input";
import ChuckNorrisQuote from "../chuck-norris-quote";
import { useItems } from "./hooks";

const ToDoList = () => {
  const { items, addItem, removeItem } = useItems();

  return (
    <div>
      <AddItemInput addItem={addItem} />
      <h2>Todo List</h2>
      {items.map(({ value, key }) => {
        return (
          <div>
            <ToDoItem
              value={value}
              removeItem={removeItem}
              itemKey={key}
              key={key}
            />
            <ChuckNorrisQuote />
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
