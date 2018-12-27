import React, { useState } from "react";
import ToDoItem from "../todo-item";

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

  return (
    <div>
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
