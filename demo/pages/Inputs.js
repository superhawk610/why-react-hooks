import React from 'react';

import Page from '../presentational/Page';
import Hooks from '../components/Inputs.hooks';

function Inputs() {
  return (
    <Page heading="Multiple inputs" explanation="This component does a thing.">
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Inputs;
