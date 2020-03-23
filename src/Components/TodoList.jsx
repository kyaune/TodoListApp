import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="Drink coffee" />
      </li>
      <li>
        <TodoListItem label="Build React app" />
      </li>
    </ul>
  );
};
export default TodoList;
