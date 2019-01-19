import { useState } from 'react';

export function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function onChange(newValue) {
    setValue(newValue);
  }

  return [value, onChange, setValue];
}
