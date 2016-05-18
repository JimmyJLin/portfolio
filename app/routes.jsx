import React from 'react';
import { Route } from 'react-router';

import App from 'components/app';
import Portfolio from 'components/portfolio';
import Photography from 'components/photography';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default () => {

  return (
    <Route path="/" component={App}>
      <Route path="portfolio" component={Portfolio}></Route>
      <Route path="photography" component={Photography}></Route>
    </Route>
  );
};
