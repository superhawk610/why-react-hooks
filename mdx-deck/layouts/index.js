import React from 'react';
import { Invert, Split } from 'mdx-deck/layouts';

export const SplitInvert = ({ children }) => (
  <Invert>
    <Split>{children}</Split>
  </Invert>
);
