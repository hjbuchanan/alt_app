import React, { Component } from 'react';
import { Route } from 'react-router';
import axios from 'axios'

import { PrimaryLayout } from 'shared/layouts';

import './App.css';

class App extends Component {
  async componentWillMount() {
    const { data } = await axios.get('/data/all/coinlist');
    const { data: prices } = await axios.get('/data/pricemulti', {
      params: { fsyms: Object.keys(data.Data).slice(0, 20).join(','), tsyms: 'BTC,USD' }
    });

  }

  render() {
    return (
      <PrimaryLayout>

      </PrimaryLayout>
    );
  }
}

export default App;
