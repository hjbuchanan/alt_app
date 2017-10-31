import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchCoins } from 'store/coins/actions';
import { fetchCoinPrice } from 'store/prices/actions';
import { FilterIcon, SortIcon, Loader } from 'shared/icons';
import { Select, Button, PriceRow, CoinSearch, Pagination } from 'shared/components';

class Coin extends Component {
  state = {
    coin: null,
    filter: 'all',
    sort: 'alphabetical',
    isDescending: true,
    page: 1,
    pageSize: 100,
  };

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
    const { sort, filter, loading } = this.state;
    const { coin, prices, main, kraken, bittrex } = this.props;

    return (
      <div className="View">
        <section className="View-heading">
          <img
            className="View-logo"
            src={`https://www.cryptocompare.com${this.props.coin.ImageUrl}`}
            alt={`${this.props.CoinName} logo`}
          />
          <h1 className="View-title">Coin: {coin.Symbol}</h1>
        </section>

        <section className="View-body">
          <div className="View-content">
            {loading ? (
              <Loader />
            ) : (
              this.props.main.map((price, index) => (
                <PriceRow
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
