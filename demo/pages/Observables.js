import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Hooks from '../components/Observables.hooks';

function Observables() {
  return (
    <Page
      heading="Subscribe to an Observable"
      explanation={oneline`The \`useEffect\` hook syntax is very conducive to subscribing to an Observable, since
Observable's \`subscribe()\` will usually return an \`unsubscribe()\` function that can in turn be passed to \`useEffect\`.`}  
    >
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Observables;
