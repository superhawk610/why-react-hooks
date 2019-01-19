import { useState, useEffect, useContext } from 'react';
import LogContext from '../LogContext';

export function useLogContext() {
  const [output, setOutput] = useState([]);
  const { log, subscribe } = useContext(LogContext);

  useEffect(() => subscribe(setOutput), []);

  return { log, output };
}
