import React, { PureComponent } from 'react';

import './styles.css';

class CoinBlock extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <section className="CoinBlock">
        <div className="CoinBlock-inner">
          <h3 className="CoinBlock-title">{`${this.props.CoinName} (${this.props.Symbol})`}</h3>
          <img
            className="CoinBlock-logo"
            src={`https://www.cryptocompare.com${this.props.ImageUrl}`}
            alt={`${this.props.CoinName} logo`}
          />
          <div className="CoinBlock-meta">
            <div className="CoinBlock-row">
              <span className="CoinBlock-metaLabel">Sponsored:</span>
              <span className="CoinBlock-metaValue">{this.props.Sponsored ? 'Yes' : 'No'}</span>
            </div>
            <div className="CoinBlock-row">
              <span className="CoinBlock-metaLabel">Supply:</span>
              <span className="CoinBlock-metaValue">{this.props.TotalCoinSupply}</span>
            </div>
          </div>
          <div className="CoinBlock-pricing">Pricing</div>
        </div>
      </section>
    );
  }
}

export default CoinBlock;
