import React from "react";

import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Acttive" },
    { name: "done", label: "Done" }
  ];
  //onClick = e => {};
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const style = isActive ? "btn-outline-primary" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${style}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
