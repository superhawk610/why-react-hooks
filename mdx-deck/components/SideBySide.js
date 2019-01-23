import React from 'react';

export default ({ left, right }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img src={left} style={{ marginRight: '10px' }} />
    <img src={right} style={{ marginLeft: '10px' }} />
  </div>
);
