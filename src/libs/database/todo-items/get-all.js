import { TODO_ITEMS } from "../constants";

const getAll = ({ database }) => async () => {
  try {
    const response = await database.collection(TODO_ITEMS).get();
    const items = [];
    response.forEach(doc => {
      items.push({
        key: doc.id,
        value: doc.data().value
      });
    });
    return items;
  } catch (error) {
    console.error("Error fetching all todo items: ", error);
  }
};

export default getAll;
