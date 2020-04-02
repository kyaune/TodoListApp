import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemButton from "../add-item";
import "./app.css";

class App extends React.Component {
  maxId = 100;
  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoItem("drink coffee"),
        this.createTodoItem("make awesome app"),
        this.createTodoItem("drink coffee")
      ],
      // todosFiltered: this.todoData,
      addItemValue: "",
      searchText: ""
    };
  }
  createTodoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id == id);
      //console.log(index);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
    });
  };
  onSubmit = item => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData];
      console.log("q");
      // newArray.push({
      //   label: e.target.value,
      //   important: false,
      //   id: todoData.length + 1
      // });
      return {
        todoData: newArray
      };
    });
  };
  addItem = text => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createTodoItem(text)];
      return {
        todoData: newArray
      };
    });
  };
  handleChange = item => {
    this.setState({ addItemValue: item });
  };
  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id == id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, "important");
      return {
        todoData: newArray
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, "done");
      return {
        todoData: newArray
      };
    });
  };
  onSearch = text => {
    this.setState({
      searchText: text
      //todosFiltered: todosFilteredNew
    });
  };
  render() {
    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    const todosFiltered = this.state.todoData.filter(item =>
      item.label.startsWith(this.state.searchText)
    );
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todosFiltered}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          text={this.state.searchText}
        />
        <AddItemButton addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
