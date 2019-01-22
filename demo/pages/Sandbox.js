import React, { useState } from 'react';

import Card from '../presentational/Card';
import Spacer from '../presentational/Spacer';
import Button from '../presentational/Button';

import { useImmer } from 'use-immer';
import { v4 as uuid } from 'uuid';

function Sandbox() {
  const [todos, updateTodos] = useImmer([]);

  const onClick = () => {
    updateTodos(draftTodos => {
      draftTodos.push({
        id: uuid(),
        name: 'Do something',
      });
    });
  };

  return (
    <Card>
      <Button text="Add Todo" onClick={onClick} />
      <Spacer />
      {todos.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </Card>
  );
}

export default Sandbox;
