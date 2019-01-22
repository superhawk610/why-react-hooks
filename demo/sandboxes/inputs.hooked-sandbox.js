import React from 'react';

import Card from '../presentational/Card';
import Input from '../presentational/Input';
import { useInput } from '../hooks/useInput';

function Sandbox() {
  const [name, onChangeName] = useInput();
  const [age, onChangeAge] = useInput();

  return (
    <Card>
      <Input label="Name" value={name} onChange={onChangeName} />
      <Input label="Age" value={age} onChange={onChangeAge} />
    </Card>
  );
}

export default Sandbox;
