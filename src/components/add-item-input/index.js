import React from "react";
import PropTypes from "prop-types";
import { useInputValue } from "../../libs/hooks";

const AddItemInput = ({ addItem }) => {
  const { value, onChange } = useInputValue();

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
