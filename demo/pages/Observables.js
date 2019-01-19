import React from 'react';

import Page from '../presentational/Page';
import Hooks from '../components/Observables.hooks';

function Observables() {
  return (
    <Page heading="Subscribe to an Observable">
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Observables;
