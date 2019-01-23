import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Code from '../presentational/Code';
import Hooks from '../components/ConsumeContext.hooks';

function ConsumeContext() {
  return (
    <Page
      heading={
        <>
          Consume <Code>React.Context</Code>
        </>
      }
      explanation={oneline`Context is a great solution to the excessive prop-drilling that often occurs in deeply
nested component trees. Instead of wrapping your component in a \`Context.Consumer\`, you may now consume context
directly with the \`useContext\` hook.`}
    >
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default ConsumeContext;
