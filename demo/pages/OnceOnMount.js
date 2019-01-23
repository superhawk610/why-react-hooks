import React from 'react';
import { oneline } from '../utils';

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
      explanation={oneline`Calling \`useEffect\` and passing an empty array of inputs will only run
the function on after the initial render. Note that even after forcing a render, the effect is not
called again.`}
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
