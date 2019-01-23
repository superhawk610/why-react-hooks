import React from 'react';
import { oneline } from '../utils';

import Page from '../presentational/Page';
import Hooks from '../components/Memoization.hooks';

function Memoization() {
  return (
    <Page
      heading="Memoizing expensive functions"
      explanation={oneline`Often components will rerender with the same props because
a parent component higher up in the tree rerenders. If your component should render the
same output when given the same set of props, consider wrapping it with \`React.memo\` or
memoizing expensive function calls with \`useMemo\`.`}
    >
      {log => (
        <>
          <Hooks log={log} />
        </>
      )}
    </Page>
  );
}

export default Memoization;
