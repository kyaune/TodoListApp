import React from "react";
import TodoListItem from "../todo-list-item/index.js";
import "./todo-list.css";
const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem
        label={item.label}
        important={item.important}
        onDeleted={() => onDeleted(item.id)}
      />
    </li>
  ));
  return <ul className="list-group todo-list">{elements}</ul>;
};
export default TodoList;
