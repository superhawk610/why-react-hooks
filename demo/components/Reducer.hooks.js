import React, { useReducer } from 'react';
import Card from '../presentational/Card';
import Inline from '../presentational/Inline';
import Button from '../presentational/Button';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
  counter: 0,
};

function ReducerComponent({ log }) {
  const [state, dispatch] = useReducer((state, action) => {
    log('action:', action.type);
    switch (action.type) {
      case RESET:
        return initialState;
      case INCREMENT:
        return {
          counter: state.counter + 1,
        };
      case DECREMENT:
        return {
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <Card>
      Counter: {state.counter}
      <Inline>
        <Button
          text="Increment"
          onClick={() => dispatch({ type: INCREMENT })}
        />
        <Button
          text="Decrement"
          onClick={() => dispatch({ type: DECREMENT })}
        />
        <Button
          text="Reset"
          color="crimson"
          onClick={() => dispatch({ type: RESET })}
        />
      </Inline>
    </Card>
  );
}

export default ReducerComponent;
