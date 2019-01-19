import React from 'react';
import styled from 'styled-components';

function LED({ on }) {
  return <Bulb on={on ? 1 : 0} />;
}

const Bulb = styled.div`
  display: inline-block;
  background: ${props => (props.on ? 'limegreen' : 'red')};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: 0 0 10px ${props => (props.on ? 'limegreen' : 'red')};
  transform: translateY(1px);
  transition: all 250ms ease-out;
`;

export default LED;
