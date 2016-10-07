import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PictureCalculator from './components/picture_calculator';
import CardSuggestor from './components/card_suggestor';

export default () => {
    <Route path="/" component={App}>
      <IndexRoute component={PictureCalculator} />
      <Route path="suggestion" component={CardSuggestor} />
    </Route>
}
