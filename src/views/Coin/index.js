import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCoins } from 'store/coins/actions';
import { fetchCoinPrice } from 'store/prices/actions';
import { Loader } from 'shared/icons';
import { PriceRow } from 'shared/components';

class Coin extends Component {
  async componentWillMount() {
    const { id } = this.props.match.params;

    this.setState({ loading: true });

    await this.props.fetchCoins();
    await this.props.fetchCoinPrice(id, 'CCCAGG');

    this.setState({ loading: false });

    if (['DASH', 'ETH', 'LTC'].includes(id)) {
      this.props.fetchCoinPrice(id, 'Kraken');
      this.props.fetchCoinPrice(id, 'Bittrex');
    }
  }

  get max() {
    const { main } = this.props;
    return main.reduce((max, coin, index) => (main[max].close < coin.close ? index : max), 0);
  }

  get min() {
    const { main } = this.props;
    return main.reduce((min, coin, index) => (main[min].close > coin.close ? index : min), 0);
  }

  render() {
    const { loading } = this.state;
    const { coin, main, kraken, bittrex } = this.props;

    return (
      <div className="View">
        <section className="View-heading">
          <img
            className="View-logo"
            src={`https://www.cryptocompare.com${this.props.coin.ImageUrl}`}
            alt={`${this.props.CoinName} logo`}
          />
          <h1 className="View-title">Coin: {coin.Symbol}</h1>
          <span className="View-headerPrice">
            Latest Price: {(this.props.main[0] || {}).close || 'N/A'}
          </span>
        </section>

        <section className="View-body">
          <div className="View-content">
            {loading ? (
              <Loader />
            ) : (
              main.map((price, index) => (
                <PriceRow
                  key={index}
                  isMax={index === this.max}
                  isMin={index === this.min}
                  main={price}
                  bittrex={bittrex[index]}
                  kraken={kraken[index]}
                />
              ))
            )}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ coins, prices }, { match: { params } }) {
  return {
    coin: coins.data[params.id] || {},
    main: (prices.byCoin[params.id] || {}).CCCAGG || [],
    kraken: (prices.byCoin[params.id] || {}).Bittrex || [],
    bittrex: (prices.byCoin[params.id] || {}).Kraken || [],
  };
}

export default connect(mapStateToProps, { fetchCoins, fetchCoinPrice })(Coin);
