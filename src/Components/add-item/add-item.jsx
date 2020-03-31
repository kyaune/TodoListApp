import React from "react";
import ReacnDOM from "react-dom";
import "./add-item.css";

const AddItemButton = ({ onSubmit, handleChange, addItemValue }) => {
  return (
    <form className="add-form" onSubmit={() => onSubmit(addItemValue)}>
      <label>
        <input
          type="text"
          value={addItemValue}
          onChange={() => handleChange(addItemValue)}
        ></input>
      </label>
      <input type="submit" className=" add-button" value="Add Item"></input>
    </form>
  );
};

export default AddItemButton;
