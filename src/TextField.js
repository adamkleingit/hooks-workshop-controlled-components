import React, { useState, useMemo } from "react";

export const useTextField = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const isValid = useMemo(() => !!value, [value]);

  return { value, setValue, isFocused, setIsFocused, isValid };
};

export const TextField = ({ value, setValue, setIsFocused, isValid }) => (
  <input
    value={value}
    style={{ border: isValid ? null : "1px solid red" }}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    onChange={e => setValue(e.target.value)}
  />
);
