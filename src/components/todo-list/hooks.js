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

  const addNewItemToItemList = ({ newItem }) => {
    const newItems = [newItem, ...items];
    setItems(newItems);
  };

  const removeItem = ({ keyToRemove }) => {
    const newItems = items.filter(({ key }) => key !== keyToRemove);
    setItems(newItems);
    Database.TodoItems.remove({ id: keyToRemove });
  };

  const addItem = async value => {
    const newItem = {
      value
    };
    addNewItemToItemList({ newItem });
    const { id } = await Database.TodoItems.add({ value });
    const newItemWithKey = {
      value,
      key: id
    };
    addNewItemToItemList({ newItem: newItemWithKey });
  };

  return {
    items,
    removeItem,
    addItem
  };
};
