import React, { useState, useEffect } from 'react';
import Card from '../presentational/Card';
import Input from '../presentational/Input';
import Button from '../presentational/Button';
import { useRenderCount } from '../hooks/useRenderCount';

function MyComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useRenderCount([name, email, age]);

  const onChangeName = val => setName(val);
  const onChangeEmail = val => setEmail(val);
  const onChangeAge = val => setAge(val);

  const doStuff = () => {
    setName('Aaron');
    setEmail('aaron@gmail.com');
    setAge('24');
  };
  const onFillInputs = () => {
    setName('Aaron');
    setEmail('aaron@gmail.com');
    setAge('24');
    doStuff();
  };

  return (
    <Card>
      <Input label="Name" value={name} onChange={onChangeName} />
      <Input label="Email Address" value={email} onChange={onChangeEmail} />
      <Input label="Age" value={age} onChange={onChangeAge} />
      <Button text="Fill Inputs" onClick={onFillInputs} />
    </Card>
  );
}

export default MyComponent;
