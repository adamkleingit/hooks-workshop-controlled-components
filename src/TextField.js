import React from "react";

export const TextField = ({ value, setValue, setIsFocused, isValid }) => (
  <input
    value={value}
    style={{ border: isValid ? null : "1px solid red" }}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    onChange={e => setValue(e.target.value)}
  />
);
