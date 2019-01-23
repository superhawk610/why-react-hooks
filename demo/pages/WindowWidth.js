import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Classes from '../components/WindowWidth.classes';
import Hooks from '../components/WindowWidth.hooks';

function WindowWidth() {
  return (
    <Page
      hideLog
      heading="Variable window width"
      explanation={oneline`The top card is implemented with a traditional class component, while
the lower card uses the new Hooks API. Note that their performance is identical.`}
    >
      {log => (
        <>
          <Classes log={log} />
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default WindowWidth;
