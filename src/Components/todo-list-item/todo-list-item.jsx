import React from "react";
import TodoList from "../todo-list/index.js";
import "./todo-list-item.css";

class TodoListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
  }
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  markImportant = () => {
    this.setState(state => {
      return {
        important: !state.important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.markImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
export default TodoListItem;
