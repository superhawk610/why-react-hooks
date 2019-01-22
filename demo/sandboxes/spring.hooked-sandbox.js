import React, { useState } from 'react';

import Card from '../presentational/Card';
import Button from '../presentational/Button';
import Spacer from '../presentational/Spacer';

import { useSpring, config, animated } from 'react-spring/hooks';

function Sandbox() {
  const [active, setActive] = useState(false);

  const props = useSpring({
    config: config.slow,
    backgroundColor: active ? 'purple' : 'green',
    borderRadius: active ? '30px' : '0px',
    marginLeft: active ? '100px' : '0px',
    progress: active ? 1 : 0,
    padding: '15px',
    color: 'white',
    width: '400px',
    textAlign: 'center',
  });

  return (
    <Card>
      <animated.div style={props}>
        Hello world!
        <animated.div>
          {props.progress.interpolate(v => v.toFixed(2))}
        </animated.div>
      </animated.div>
      <Spacer />
      <Button text="Toggle Animation" onClick={() => setActive(!active)} />
    </Card>
  );
}

function App() {
  return (
    <>
      <h1>Sandbox</h1>
      <Sandbox />
    </>
  );
}

export default App;
