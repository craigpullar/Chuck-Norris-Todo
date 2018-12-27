import { useState } from "react";

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

  const addItem = value => {
    const newItem = {
      value,
      key:
        items.reduce(
          (accumulator, { key }) => (key > accumulator ? key : accumulator),
          0
        ) + 1
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
