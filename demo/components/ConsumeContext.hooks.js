import React, { createContext, useState, useContext } from 'react';
import Card from '../presentational/Card';
import Inline from '../presentational/Inline';
import Button from '../presentational/Button';

const Context = createContext({});

function Layer({ children }) {
  return <div>{children}</div>;
}

function Parent({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <Context.Provider value={{ counter, increment, decrement }}>
      {children}
    </Context.Provider>
  );
}

function DeeplyNested() {
  const { counter, increment, decrement } = useContext(Context);

  return (
    <Card>
      Counter: {counter}
      <Inline>
        <Button text="Increment" onClick={increment} />
        <Button text="Decrement" onClick={decrement} />
      </Inline>
    </Card>
  );
}

function ConsumeContext({ log }) {
  return (
    <Parent>
      <Layer>
        <Layer>
          <Layer>
            <Layer>
              <Layer>
                <Layer>
                  <DeeplyNested />
                </Layer>
              </Layer>
            </Layer>
          </Layer>
        </Layer>
      </Layer>
    </Parent>
  );
}

export default ConsumeContext;
