import React from 'react';
import { useLogContext } from '../hooks/useLogContext';
import styled from 'styled-components';

import Block from './Block';
import LogOutput from './LogOutput';

function Page({ heading, hideLog, children, explanation }) {
  const { log, output } = useLogContext();

  return (
    <>
      <Heading>{heading}</Heading>
      {children(log)}
      {!hideLog && <LogOutput output={output} />}
      {explanation && <Block heading="Explanation">{explanation}</Block>}
    </>
  );
}

const Heading = styled.div`
  font-size: 24px;
  color: #aaa;
  margin: 5px 0 15px;
`;

export default Page;
