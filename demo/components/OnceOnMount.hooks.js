import React, { useState, useEffect } from 'react';
import Card from '../presentational/Card';

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

  return (
    <Card>{loading ? 'Loading...' : <pre>{JSON.stringify(data)}</pre>}</Card>
  );
}

export default OnceOnMount;
