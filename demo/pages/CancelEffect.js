import React from 'react';
import { oneline } from '../utils';

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
      explanation={oneline`This fetch implementation returns a \`cancel()\` method that can be used to
prevent its callback from being invoked upon completion. You can imagine a similar method for force-stopping
further action on a long-running background process. \`cancel()\` can be manually invoked while the request
is loading using the Cancel Request button, and will be invoked by React if the component is unmounted before
the request has completed.`}
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
