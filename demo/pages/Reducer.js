import React from 'react';

import Page from '../presentational/Page';
import Hooks from '../components/Reducer.hooks';

function Reducer() {
  return (
    <Page heading="Use state reducer for complex local state">
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Reducer;
