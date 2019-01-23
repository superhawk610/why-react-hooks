import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Hooks from '../components/Inputs.hooks';

function Inputs() {
  return (
    <Page
      heading="Multiple inputs"
      explanation={oneline`This card displays 3 controlled inputs with state managed via hooks.
The Fill Inputs button will call each \`setState\` handler 2 times in sequence; note that this still only causes
a single rerender due to React's render batching & queueing.`}>
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Inputs;
