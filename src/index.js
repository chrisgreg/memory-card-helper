import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import App from './components/app';
import PictureCalculator from './components/picture_calculator';
import CardSuggestor from './components/card_suggestor';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="https://chrisgreg.github.io/memory-card-helper/" component={App}>
        <IndexRoute component={PictureCalculator} />
        <Route path="suggestion" component={CardSuggestor} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
