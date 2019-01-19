import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import styled from 'styled-components';

import LogContext, { createLogContext } from '../LogContext';
import Sidebar from './Sidebar';

const logContext = createLogContext();

const App = () => (
  <LogContext.Provider value={logContext}>
    <Container>
      <Sidebar />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect to={routes[0].path} />
      </Switch>
    </Container>
  </LogContext.Provider>
);

const Container = styled.div`
  padding: 25px;
  padding-left: 275px;
  background: #f8f8f8;
  height: 100vh;
  overflow-y: auto;
`;

export default App;
