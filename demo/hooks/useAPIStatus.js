import { useState, useEffect } from 'react';
import { API } from '../services/api.service';

export function useAPIStatus() {
  const [active, setActive] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(
    () =>
      API.subscribe(res => {
        setActive(res.active);
        setNotificationCount(res.notifications);
      }),
    [],
  );

  return { active, notificationCount };
}
