import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchCoins } from 'store/coins/actions';
import { fetchPrices } from 'store/prices/actions';
import { FilterIcon, SortIcon } from 'shared/icons';
import { Select, Button, CoinBlock, CoinSearch, Pagination } from 'shared/components';

class Home extends Component {
  state = {
    coin: null,
    filter: 'all',
    sort: 'alphabetical',
    isDescending: true,
    page: 1,
    pageSize: 100,
  };

  async componentWillMount() {
    await this.props.fetchCoins();
    await this.props.fetchPrices();
  }

  onSelectChange(key) {
    return ({ value }) => {
      this.setState({ [key]: value });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.coins.length !== nextProps.coins.length) {
      this.setState({
        options: [...nextProps.coins.map(coin => ({ label: coin.Symbol, value: coin.Symbol }))],
      });
    }
  }

  filterByCoin(coin) {
    if (this.state.coin) {
      return this.state.coin === coin.Symbol;
    } else {
      return true;
    }
  }

  filterByMain(coin) {
    const { filter } = this.state;
    if (filter === 'main') {
      return ['LTC', 'DASH', 'ETH'].includes(coin.Symbol);
    } else {
      return true;
    }
  }

  sort(coinA, coinB) {
    const { sort } = this.state;
    if (sort === 'alphabetical') {
      return (coinA.CoinName < coinB.CoinName ? -1 : 1) * this.isDescending;
    } else if (sort === 'supply') {
      return (coinA.TotalCoinSupply < coinB.TotalCoinSupply ? -1 : 1) * this.isDescending;
    }
  }

  get coins() {
    const { page, pageSize } = this.state;
    return this.props.coins
      .filter(this.filterByCoin.bind(this))
      .filter(this.filterByMain.bind(this))
      .slice((page - 1) * pageSize, page * pageSize)
      .sort(this.sort.bind(this));
  }

  get isDescending() {
    return this.state.isDescending ? -1 : 1;
  }

  render() {
    const { sort, filter } = this.state;
    const { coins, prices } = this.props;

    return (
      <div className="View">
        <section className="View-heading">
          <h1 className="View-title">Coins</h1>
          <CoinSearch
            options={this.state.options}
            onChange={change => this.setState({ coin: change.value })}
            coin={this.state.coin || ''}
          />
          {this.state.coin && (
            <Button
              className="Button--select"
              onClick={() => this.setState({ coin: null })}
              isPrimary
              text="Clear"
            />
          )}
        </section>

        <section className="View-body">
          <div className="View-body-header">
            <div className="View-panel">
              <FilterIcon
                className={cx('View-icon-blue', {
                  'View-icon--active': filter !== 'all',
                })}
              />
              <span
                className={cx('View-icon-label', {
                  'View-label--active': filter !== 'all',
                })}>
                Filter By
              </span>
              <Select
                isSmall
                inputProps={{ id: 'filter' }}
                autosize={false}
                clearable={false}
                searchable={true}
                options={[{ label: 'Show All', value: 'all' }, { label: 'Main', value: 'main' }]}
                onChange={change => this.onSelectChange('filter')(change)}
                placeholder="Search by Customer or User"
                value={this.state.filter}
              />
            </div>

            <div className="View-panel">
              <Button
                className={cx('View-icon-label View-icon-label--button', {
                  'View-label--active': sort !== 'updated',
                })}
                icon={
                  <SortIcon
                    className={cx('View-icon-blue', {
                      'View-icon--active': sort !== 'alphabetical',
                      'View-icon--flip': !this.state.isDescending,
                    })}
                  />
                }
                text="Sort By"
                onClick={() => this.setState({ isDescending: !this.state.isDescending })}
                isTransparent
              />
              <Select
                isSmall
                inputProps={{ id: 'sort' }}
                autosize={false}
                clearable={false}
                searchable={true}
                options={[
                  { label: 'Alphabetical', value: 'alphabetical' },
                  { label: 'Supply', value: 'supply' },
                ]}
                onChange={change => this.onSelectChange('sort')(change)}
                placeholder="Search by Customer or User"
                value={this.state.sort}
              />
            </div>
          </div>
          <div className="View-content">
            {this.coins.map(coin => (
              <CoinBlock key={coin.Id} {...coin} prices={prices[coin.Symbol]} />
            ))}
          </div>
          <Pagination
            total={
              this.props.coins
                .filter(this.filterByCoin.bind(this))
                .filter(this.filterByMain.bind(this)).length
            }
            pageSize={100}
            page={this.state.page}
            type="coins"
            onPageSizeChange={pageSize => this.setState({ pageSize })}
            onPageChange={page => this.setState({ page })}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps({ coins, prices }) {
  return {
    coins: coins.result.map(id => coins.data[id]),
    prices: prices.data,
  };
}

export default connect(mapStateToProps, { fetchCoins, fetchPrices })(Home);
