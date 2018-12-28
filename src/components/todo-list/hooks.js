import { useState, useEffect } from "react";
import Database from "../../libs/database";

const useDatabaseItems = ({ setItems }) => {
  const loadItems = async () => {
    const loadedItems = await Database.TodoItems.getAll();
    setItems(loadedItems);
  };

  useEffect(() => {
    loadItems();
    return () => {};
  }, []);
};

export const useItems = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);
  !initialItems.length && useDatabaseItems({ setItems });

  const removeItem = ({ keyToRemove }) => {
    const newItems = items.filter(({ key }) => key !== keyToRemove);
    setItems(newItems);
    Database.TodoItems.remove({ id: keyToRemove });
  };

  const addItem = async value => {
    //TODO: Maybe a sync key function so we don't block the render whilst we access the db
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
