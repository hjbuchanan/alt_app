import React, { Component } from 'react';
import { Header, FlashMessage } from 'shared/components';

class PrimaryLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <FlashMessage />
      </div>
    );
  }
}

export default PrimaryLayout;
