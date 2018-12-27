import React from "react";
import PropTypes from "prop-types";

const ToDoItem = ({ value, removeItem, itemKey }) => (
  <div>
    <p>{value}</p>
    <button
      onClick={() => {
        removeItem({ keyToRemove: itemKey });
      }}
    >
      delete
    </button>
  </div>
);

ToDoItem.propTypes = {
  value: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ToDoItem;
