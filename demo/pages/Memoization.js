import React from 'react';

import Page from '../presentational/Page';
import Hooks from '../components/Memoization.hooks';

function Memoization() {
  return (
    <Page heading="Memoizing expensive functions">
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Memoization;
