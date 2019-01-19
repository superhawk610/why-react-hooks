import React from 'react';
import styled from 'styled-components';

function Input({ label, onChange, ...rest }) {
  function onChangeHandler({ target: { value } }) {
    if (onChange) onChange(value);
  }

  return (
    <InputGroup>
      <Label>{label}</Label>
      <InputElement onChange={onChangeHandler} {...rest} />
    </InputGroup>
  );
}

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-left: 2px;
  margin-bottom: 5px;
  font-weight: 700;
`;

const InputElement = styled.input`
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 4px 10px;
  outline: none;

  &:focus {
    border-color: #bbb;
  }
`;

export default Input;
