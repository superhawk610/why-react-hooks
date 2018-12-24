import React from 'react';

export default ({ children, style, ...delegated }) => (
  <li style={{ ...style, textAlign: 'left' }} {...delegated}>
    {children}
  </li>
);
