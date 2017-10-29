import React, { Component } from 'react';
import { SaltLogo } from 'shared/icons';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-left">
          <SaltLogo />
        </div>

        <div className="Header-right">
        </div>
      </header>
    );
  }
}

export default Header;