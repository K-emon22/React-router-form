import {useState} from "react";

const UseInputHooks = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const handleInputsOnChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleInputsOnChange];
};

export default UseInputHooks;
