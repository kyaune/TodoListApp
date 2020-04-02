import React from "react";
import TodoListItem from "../todo-list-item/index.js";
import "./todo-list.css";
const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  searchText
}) => {
  const elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem
        label={item.label}
        important={item.important}
        done={item.done}
        onDeleted={() => onDeleted(item.id)}
        onToggleImportant={() => onToggleImportant(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
      />
    </li>
  ));
  return <ul className="list-group todo-list">{elements}</ul>;
};
export default TodoList;
