import { TODO_ITEMS } from "../constants";

const remove = ({ database }) => ({ id }) =>
  database
    .collection(TODO_ITEMS)
    .doc(id)
    .delete();

export default remove;
