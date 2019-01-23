import WindowWidth from './pages/WindowWidth';
import Inputs from './pages/Inputs';
import OnceOnMount from './pages/OnceOnMount';
import CancelEffect from './pages/CancelEffect';
import Observables from './pages/Observables';
import ConsumeContext from './pages/ConsumeContext';
import Reducer from './pages/Reducer';
import Memoization from './pages/Memoization';
import Sandbox from './pages/Sandbox';

const routes = [
  {
    name: 'Window Width',
    path: '/window-width',
    component: WindowWidth,
  },
  {
    name: 'Inputs',
    path: '/inputs',
    component: Inputs,
  },
  {
    name: 'Once on Mount',
    path: '/once-on-mount',
    component: OnceOnMount,
  },
  {
    name: 'Cancel on Unmount',
    path: '/cancel-on-unmount',
    component: CancelEffect,
  },
  {
    name: 'Observables',
    path: '/observables',
    component: Observables,
  },
  {
    name: 'Consume Context',
    path: '/consume-context',
    component: ConsumeContext,
  },
  {
    name: 'Reducer',
    path: '/reducer',
    component: Reducer,
  },
  {
    name: 'Memoization',
    path: '/memoization',
    component: Memoization,
  },
  {
    name: 'Sandbox',
    path: '/sandbox',
    component: Sandbox,
  },
];

export default routes;
