import React, { useState, useEffect } from 'react';
import { useForceRender } from '../hooks/useForceRender';
import Card from '../presentational/Card';
import Button from '../presentational/Button';

import { fetchList } from '../services/api.service';

function OnceOnMount({ log }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    log('beginning fetch... (2s simulated latency)');
    fetchList(2000).then(res => {
      log('fetch completed!');
      setData(res);
      setLoading(false);
    });
  }, []);

  const { semaphore, forceRender } = useForceRender();
  useEffect(() => log('rendering'), [semaphore]);
  
  return (
    <Card>{loading ? 'Loading...' : <pre>{JSON.stringify(data)}</pre>}<Button text="Force Render" onClick={forceRender} /></Card>
  );
}

export default OnceOnMount;
