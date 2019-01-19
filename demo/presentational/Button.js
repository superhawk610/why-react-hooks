import React from 'react';
import styled from 'styled-components';

function Button({ text, color = 'slateblue', ...rest }) {
  return (
    <ButtonElement color={color} {...rest}>
      {text}
    </ButtonElement>
  );
}

const ButtonElement = styled.button`
  background: ${props => props.color};
  color: white;
  border: none;
  outline: none;
  padding: 6px 10px 5px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;

  &:active {
    opacity: 0.8;
  }
`;

export default Button;
