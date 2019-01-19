import React from 'react';

import Page from '../presentational/Page';
import Code from '../presentational/Code';
import Hooks from '../components/CancelEffect.hooks';

function CancelEffect() {
  return (
    <Page
      heading={
        <>
          Disable effect on unmount (replaces <Code>componentWillUnmount</Code>)
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

export default CancelEffect;
