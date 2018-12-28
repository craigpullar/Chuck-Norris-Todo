import { useState } from "react";
import Database from "../../libs/database";

const defaultItems = [
  { value: "item one", key: 1 },
  { value: "item two", key: 2 }
];

export const useItems = (initialItems = defaultItems) => {
  const [items, setItems] = useState(initialItems);

  const removeItem = ({ keyToRemove }) => {
    const newItems = items.filter(({ key }) => key !== keyToRemove);
    setItems(newItems);
  };

  const addItem = async value => {
    const { id } = await Database.TodoItems.add({ value });
    const newItem = {
      value,
      key: id
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return {
    items,
    removeItem,
    addItem
  };
};
