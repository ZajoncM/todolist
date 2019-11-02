import React from "react";
import Search from "./todo/Search";
import TaskList from "./todo/TaskList";
import AddTask from "./todo/AddTask";

const Todo = () => {
  return (
    <>
      <section className="search">
        <Search />
      </section>
      <section className="addTask">
        <AddTask />
      </section>
      <section className="taskList">
        <TaskList />
      </section>
    </>
  );
};

export default Todo;
