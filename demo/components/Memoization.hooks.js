import React, { useMemo, useState } from 'react';
import Card from '../presentational/Card';
import Button from '../presentational/Button';

function MyComponent({ log, count }) {
  const hash = useMemo(
    () => {
      log('running memoized function');
      // perform some expensive calculation
      return 'foo';
    },
    [count],
  );

  return <Card>{hash}</Card>;
}

function Parent({ log }) {
  const [count, setCount] = useState(0);

  const onReload = () => setCount(count);
  const onUpdate = () => setCount(count + 1);

  return (
    <>
      <MyComponent log={log} count={count} />
      <Button text="Rerender without changing props" onClick={onReload} />
      <Button text="Change props" onClick={onUpdate} />
    </>
  );
}

export default Parent;
