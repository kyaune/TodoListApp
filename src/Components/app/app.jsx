import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemButton from "../add-item";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 }
      ],
      addItemValue: ""
    };
  }
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
  handleChange = item => {
    this.setState({ addItemValue: item });
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItemButton
          onSubmit={this.onSubmit}
          hadleChange={this.hadleChange}
          addItemValue={this.state.addItemValue}
        />
      </div>
    );
  }
}

export default App;
