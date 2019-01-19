import { createContext } from 'react';
import { format } from 'date-fns';

export function createLogContext() {
  const listeners = [];
  let output = [];

  function next() {
    listeners.forEach(listener => {
      listener(output);
    });
  }

  function subscribe(listener) {
    listeners.push(listener);
    next();

    let isSubscribed = true;

    return function unsubscribe() {
      if (!isSubscribed) return;

      isSubscribed = false;

      const idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);
      if (listeners.length === 0) {
        console.clear();
        output = [];
      }
    };
  }

  function log(...messages) {
    console.log(...messages);

    const line = messages.reduce((carry, input, index) => {
      const formatted = typeof input === 'string' ? input : input.toString();
      const separator = index === messages.length - 1 ? '' : ' ';
      return carry + formatted + separator;
    }, `[${format(new Date(), 'h:mm:ss')}] `);

    output.push(line);
    next();
  }

  return Object.freeze({ subscribe, log });
}

export default createContext({});
