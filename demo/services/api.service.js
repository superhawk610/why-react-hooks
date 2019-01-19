const NETWORK_LATENCY = 2000;
const OBSERVABLE_UPDATE_FREQUENCY = 2000;
const mockList = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Foo Bar' },
];

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export async function fetchList(latency = NETWORK_LATENCY) {
  await sleep(latency);
  return mockList.slice();
}

export function fetchListCancellable(callback, latency = NETWORK_LATENCY) {
  let isCancelled = false;

  setTimeout(() => {
    if (!isCancelled) {
      callback(mockList.slice());
    }
  }, latency);

  return function cancel() {
    isCancelled = true;
  };
}

function createObservable() {
  const initialState = {
    active: false,
    notifications: 0,
  };
  let state = { ...initialState };
  const listeners = [];
  let mockActivityTimeout = null;

  function mockStateChange() {
    state.active = !state.active;
    state.notifications++;
    next();
    mockActivityTimeout = setTimeout(
      mockStateChange,
      OBSERVABLE_UPDATE_FREQUENCY,
    );
  }

  function startFiring() {
    mockStateChange();
  }

  function shutDown() {
    if (mockActivityTimeout) {
      clearTimeout(mockActivityTimeout);
    }

    mockActivityTimeout = null;
    state = { ...initialState };
  }

  function next() {
    listeners.forEach(listener => {
      listener(state);
    });
  }

  function subscribe(listener) {
    listeners.push(listener);
    if (listeners.length === 1) startFiring();

    let isSubscribed = true;

    return function unsubscribe() {
      if (!isSubscribed) return;

      isSubscribed = false;

      const idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);

      if (listeners.length === 0) shutDown();
    };
  }

  return Object.freeze({ subscribe });
}

export const API = createObservable();
