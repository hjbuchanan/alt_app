import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SaltLogo } from 'shared/icons';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Link className="Header-left" to="/">
          <SaltLogo />
        </Link>

        <div className="Header-right">
          <Link className="Header-link" to="/favorites">
            Favorites
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
