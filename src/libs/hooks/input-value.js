import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  };

  const clearValue = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    clearValue
  };
};
