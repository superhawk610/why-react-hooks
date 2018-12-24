import React from 'react';

import WindowWidth from './WindowWidth';
import { default as WindowWidthHooks } from './WindowWidth.hooks';

import Container from './Container';

const App = () => (
  <Container>
    <WindowWidth />
    <WindowWidthHooks />
  </Container>
);

export default App;
