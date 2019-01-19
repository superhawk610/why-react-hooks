import React from 'react';

import Page from '../presentational/Page';
import Code from '../presentational/Code';
import Hooks from '../components/OnceOnMount.hooks.js';

function OnceOnMount() {
  return (
    <Page
      heading={
        <>
          Run a function once on mount (replaces <Code>componentDidMount</Code>)
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

export default OnceOnMount;
