import React from 'react';
import ActivitiesTable from '../../pages/table';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main className="main-layout">
    <Switch>
      <Route exact path="/" component={ActivitiesTable} />
    </Switch>
  </main>
);

export default Main;