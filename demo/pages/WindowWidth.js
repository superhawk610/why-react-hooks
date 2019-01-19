import React from 'react';

import Page from '../presentational/Page';
import Classes from '../components/WindowWidth.classes';
import Hooks from '../components/WindowWidth.hooks';

function WindowWidth() {
  return (
    <Page hideLog heading="Variable window width">
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
