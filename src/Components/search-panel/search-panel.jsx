import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.props.onSearch(e.target.value);
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <input
        placeholder="seacrh form-control"
        className="search-panel"
        onChange={this.onChange}
        value={this.state.text}
      ></input>
    );
  }
}
export default SearchPanel;
