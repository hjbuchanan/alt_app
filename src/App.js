import React, { Component } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import store from 'store';
import { Home, Coin } from 'views';
import { PrimaryLayout } from 'shared/layouts';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PrimaryLayout>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/coin/:id" component={Coin} />
            </Switch>
          </PrimaryLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
