import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class CoinBlock extends PureComponent {
  render() {
    return (
      <Link className="CoinBlock" to={`/coin/${this.props.Symbol}`}>
        <div className="CoinBlock-inner">
          <h3 className="CoinBlock-title">{`${this.props.CoinName} (${this.props.Symbol})`}</h3>
          <img
            className="CoinBlock-logo"
            src={`https://www.cryptocompare.com${this.props.ImageUrl}`}
            alt={`${this.props.CoinName} logo`}
          />
          <div className="CoinBlock-meta">
            <h4 className="CoinBlock-subtitle">Meta</h4>
            <div className="CoinBlock-row">
              <span className="CoinBlock-metaLabel">Sponsored:</span>
              <span className="CoinBlock-metaValue">{this.props.Sponsored ? 'Yes' : 'No'}</span>
            </div>
            <div className="CoinBlock-row">
              <span className="CoinBlock-metaLabel">Supply:</span>
              <span className="CoinBlock-metaValue">{this.props.TotalCoinSupply}</span>
            </div>
          </div>
          <div className="CoinBlock-pricing">
            <h4 className="CoinBlock-subtitle">Pricing</h4>
            {Object.keys(this.props.prices || {}).map(exchange => (
              <div className="CoinBlock-row">
                <span className="CoinBlock-metaLabel">{exchange}</span>
                <span className="CoinBlock-metaValue">
                  {this.props.prices[exchange].BTC || 'N/A'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  }
}

export default CoinBlock;
