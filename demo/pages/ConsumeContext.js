import React from 'react';

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
