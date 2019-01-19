import React from 'react';
import { useScrollToBottom } from '../hooks/useScrollToBottom';
import styled from 'styled-components';

function Block({ heading, children, constrain }) {
  const scrollerRef = useScrollToBottom([children]);

  return (
    <>
      <Heading>{heading}</Heading>
      <Container constrain={constrain ? 1 : 0} ref={scrollerRef}>
        {children}
      </Container>
    </>
  );
}

const Heading = styled.div`
  color: #bbb;
  font-size: 12px;
  font-weight: 700;
  margin-top: 30px;
  text-transform: uppercase;
`;

const Container = styled.pre`
  background: #eee;
  color: #777;
  font-family: monospace;
  padding: 25px;
  border-radius: 4px;
  margin-top: 5px;
  height: ${props => (props.constrain ? '150px' : 'auto')};
  overflow-y: auto;
`;

export default Block;
