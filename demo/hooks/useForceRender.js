import { useState } from 'react';

export function useForceRender() {
  const [semaphore, setSemaphore] = useState(0);

  const forceRender = () => setSemaphore(semaphore + 1);

  return { semaphore, forceRender };
}
