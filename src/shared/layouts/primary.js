import React, { Component } from 'react';
import { Header } from 'shared/components';

class PrimaryLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PrimaryLayout;