import React from 'react';

import Block from './Block';

function LogOutput({ output }) {
  return (
    <Block constrain heading="Log Output">
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </Block>
  );
}

export default LogOutput;
