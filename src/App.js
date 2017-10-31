import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import store from 'store';
import { Home, Coin } from 'views';
import { PrimaryLayout, ScrollLayout } from 'shared/layouts';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PrimaryLayout>
            <ScrollLayout>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/coin/:id" component={Coin} />
              </Switch>
            </ScrollLayout>
          </PrimaryLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
