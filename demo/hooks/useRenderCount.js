import { useState, useEffect, useContext } from 'react';

import LogContext from '../LogContext';

export function useRenderCount(watchedState = []) {
  const { log } = useContext(LogContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    log(`re-rendering (render count: ${count})`);
    setCount(count + 1);
  }, watchedState);
}
