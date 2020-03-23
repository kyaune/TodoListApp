import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./Components/AppHeader.jsx";
import SearchPanel from "./Components/SearchPanel.jsx";
import TodoList from "./Components/TodoList.jsx";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
