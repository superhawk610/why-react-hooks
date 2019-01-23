import React, { useState, useEffect } from 'react';
import Card from '../presentational/Card';
import LED from '../presentational/LED';
import { API } from '../services/api.service';

function Observables({ log }) {
  const [active, setActive] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    log('subscribing to observable...');
    const unsubscribe = API.subscribe(res => {
      log('receiving payload from observable');
      setActive(res.active);
      setNotificationCount(res.notifications);
    });

    return () => {
      log('unsubscribing from observable');
      unsubscribe();
    };
  }, []);

  return (
    <Card>
      <div>
        Active: <LED on={active} />
      </div>
      <div>Notifications: {notificationCount}</div>
    </Card>
  );
}

export default Observables;
