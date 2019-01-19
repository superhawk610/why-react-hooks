import React, { useState, useEffect, useRef } from 'react';
import Card from '../presentational/Card';
import Button from '../presentational/Button';

import { fetchListCancellable } from '../services/api.service';

function CancelEffect({ log }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cancelRequest = useRef(null);

  const onClickCancel = () => {
    log('cancelled request');
    setLoading(false);
    if (cancelRequest.current) cancelRequest.current();
  };

  useEffect(() => {
    log('beginning fetch... (5s simulated latency)');
    cancelRequest.current = fetchListCancellable(res => {
      log('fetch completed!');
      setData(res);
      setLoading(false);
    }, 5000);
    return cancelRequest.current;
  }, []);

  return (
    <Card>
      {loading ? (
        <>
          Loading...
          <Button text="Cancel Request" onClick={onClickCancel} />
        </>
      ) : (
        <pre>{JSON.stringify(data)}</pre>
      )}
    </Card>
  );
}

export default CancelEffect;
