import React from 'react';
import { Switch } from 'react-router-dom';
import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import entitiesReducers from './reducers';

import Car from './carsapp/car';
import Dealer from './dealersapp/dealer';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  const store = getStore();
  store.injectReducer('gateway', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <ErrorBoundaryRoute path={`${match.url}car`} component={Car} />
        <ErrorBoundaryRoute path={`${match.url}dealer`} component={Dealer} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};
