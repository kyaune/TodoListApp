import React from "react";
import "./add-item.css";

const AddItemButton = ({ onSubmit, addItem, addItemValue }) => {
  return (
    // <form className="add-form" onSubmit={() => onSubmit(addItemValue)}>
    //   <label>
    //     <input
    //       type="text"
    //       value={addItemValue}
    //       onChange={() => handleChange(addItemValue)}
    //     ></input>
    //   </label>
    <button
      type="primary"
      className="btn add-button btn-outline-primary"
      onClick={() => addItem("Hello world!")}
    >
      Add Item
    </button>
    //</form>
  );
};

export default AddItemButton;
