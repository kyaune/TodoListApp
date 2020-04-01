import React from "react";
import "./add-item.css";

class AddItemButton extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ""
    };
  }
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
  };
  render() {
    return (
      <form className="d-flex add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What to do next?"
        ></input>
        <button
          type="primary"
          className="btn add-button btn-outline-primary"
          onClick={() => this.props.addItem("Hello world!")}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddItemButton;
