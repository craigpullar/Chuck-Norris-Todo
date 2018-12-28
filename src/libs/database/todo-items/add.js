import moment from "moment";
import { TODO_ITEMS } from "../constants";

const add = ({ database }) => ({ value }) =>
  database.collection(TODO_ITEMS).add({
    value,
    timestamp: moment().valueOf()
  });

export default add;
