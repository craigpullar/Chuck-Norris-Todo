import initialiseDatabase from "./initialise-database";
import TodoItems from "./todo-items";

const database = initialiseDatabase();

export default {
  TodoItems: TodoItems({ database })
};
