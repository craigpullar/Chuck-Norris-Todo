import React from "react";
import Typography from "@material-ui/core/Typography";

import ToDoList from "../../components/todo-list";

const Home = () => (
  <div style={{ padding: 40 }}>
    <Typography variant="h1">Chuck Norris Todo</Typography>
    <ToDoList />
  </div>
);

export default Home;
