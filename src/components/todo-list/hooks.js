import { useState, useEffect } from "react";
import Database from "../../libs/database";

export const useItems = (initialItems = []) => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const loadedItems = await Database.TodoItems.getAll();
    setItems(loadedItems);
  };

  useEffect(() => {
    loadItems();
    return () => {};
  }, []);

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
    const newItems = [newItem, ...items];
    setItems(newItems);
  };

  return {
    items,
    removeItem,
    addItem
  };
};
