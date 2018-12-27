import React, { useState } from "react";
import PropTypes from "prop-types";

const AddItemInput = ({ addItem }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h5>Add Item</h5>
      <input type="text" value={value} onChange={onChange} />
      <button
        onClick={() => {
          addItem(value);
        }}
      >
        Add +
      </button>
    </div>
  );
};

AddItemInput.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItemInput;
