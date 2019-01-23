import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Hooks from '../components/Reducer.hooks';

function Reducer() {
  return (
    <Page
      heading="Use state reducer for complex local state"
      explanation={oneline`Flux introduced a convenient state management pattern that has risen drastically in popularity
due to Redux and its React bindings (react-redux). The \`useReducer\` hooks allows you to manage local component state
using a Flux style state machine, dispatching actions that are then handled by a reducer to determine state.`}
    >
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Reducer;
