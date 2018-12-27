import React, { useState } from "react";
import ToDoItem from "../todo-item";
import AddItemInput from "../add-item-input";

const ToDoList = () => {
  const [items, setItems] = useState([
    { value: "item one", key: 1 },
    { value: "item two", key: 2 }
  ]);

  const removeItem = ({ keyToRemove }) => {
    const newItems = items.filter(({ key }) => key !== keyToRemove);
    console.log(keyToRemove, newItems);
    setItems(newItems);
  };

  const addItem = value => {
    const newItem = {
      value,
      key: items.length + 1
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <div>
      <AddItemInput addItem={addItem} />
      <h2>Todo List</h2>
      {items.map(({ value, key }) => {
        return (
          <ToDoItem
            value={value}
            removeItem={removeItem}
            itemKey={key}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
