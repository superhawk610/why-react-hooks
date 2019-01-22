import React, { useState } from 'react';

import Card from '../presentational/Card';

function Sandbox() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeAge = e => setAge(e.target.value);

  return (
    <Card>
      <label>Name</label>
      <input value={name} onChange={onChangeName} />
      <label>Age</label>
      <input value={age} onChange={onChangeAge} />
    </Card>
  );
}

export default Sandbox;
