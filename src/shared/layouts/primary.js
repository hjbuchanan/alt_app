import React, { Component } from 'react';
import { Header } from 'shared/components';

class PrimaryLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default PrimaryLayout;
