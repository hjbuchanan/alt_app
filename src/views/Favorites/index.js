import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { CoinWrapper } from 'shared/wrappers';
import { fetchCoins } from 'store/coins/actions';
import { fetchPrices } from 'store/prices/actions';
import { toggle } from 'store/favorites/actions';
import { fsCustomEvent } from 'store/fs/actions';
import { FilterIcon, SortIcon, Loader } from 'shared/icons';
import {
  Select,
  Button,
  CoinBlock,
  CoinSearch,
  Pagination
} from 'shared/components';

class Home extends Component {
  get coins() {
    const { page, pageSize } = this.props;
    return this.props.coins
      .filter(this.props.filterByCoin)
      .filter(this.props.filterByMain)
      .sort(this.props.sort)
      .slice((page - 1) * pageSize, page * pageSize);
  }

  componentDidMount() {
    this.props.fsCustomEvent({
      eventName: 'View Favorite',
      eventProperties: [
        {
          propertyName: 'FavoritesABTest',
          propertyType: 'boolean',
          propertyValue: true
        }
      ]
    });
  }

  render() {
    const { prices, sortValue, filter } = this.props;

    return (
      <div className="View">
        <section className="View-heading">
          <h1 className="View-title">Favorite Coins</h1>
          <CoinSearch
            options={this.props.options}
            onChange={change =>
              this.props.updateState({ coin: change.value, page: 1 })
            }
            coin={this.props.coin || ''}
          />
          {this.props.coin && (
            <Button
              className="Button--select"
              onClick={() => this.props.updateState({ coin: null })}
              isPrimary
              text="Clear"
              style={{ width: '150px' }}
            />
          )}
        </section>

        <section className="View-body">
          <div className="View-body-header">
            <div className="View-panel">
              <FilterIcon
                className={cx('View-icon-blue', {
                  'View-icon--active': filter !== 'all'
                })}
              />
              <span
                className={cx('View-icon-label', {
                  'View-label--active': filter !== 'all'
                })}
              >
                Filter By
              </span>
              <Select
                isSmall
                inputProps={{ id: 'filter' }}
                autosize={false}
                clearable={false}
                searchable={true}
                options={[
                  { label: 'Show All', value: 'all' },
                  { label: 'Main', value: 'main' }
                ]}
                onChange={change => this.props.onSelectChange('filter')(change)}
                placeholder="Search by Customer or User"
                value={this.props.filter}
              />
            </div>

            <div className="View-panel">
              <Button
                className={cx('View-icon-label View-icon-label--button', {
                  'View-label--active': sortValue !== 'alphabetical'
                })}
                icon={
                  <SortIcon
                    className={cx('View-icon-blue', {
                      'View-icon--active': sortValue !== 'alphabetical',
                      'View-icon--flip': !this.props.isDescending
                    })}
                  />
                }
                text="Sort By"
                onClick={() =>
                  this.props.updateState({
                    isDescending: !this.props.isDescending
                  })
                }
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
                  { label: 'Price', value: 'price' }
                ]}
                onChange={change => this.props.onSelectChange('sort')(change)}
                placeholder="Search by Customer or User"
                value={this.props.sortValue}
              />
            </div>
          </div>
          <div className="View-content">
            {this.props.loading ? (
              <Loader />
            ) : (
              this.coins.map(coin => (
                <CoinBlock
                  key={coin.Id}
                  {...coin}
                  isFavorite={this.props.favorites.includes(coin.Symbol)}
                  prices={prices[coin.Symbol]}
                  toggle={this.props.toggle}
                />
              ))
            )}
          </div>
          {this.props.coins.length !== 0 && (
            <Pagination
              total={
                this.props.coins
                  .filter(this.props.filterByCoin)
                  .filter(this.props.filterByMain).length
              }
              pageSize={this.props.pageSize}
              page={this.props.page}
              type="coins"
              onPageSizeChange={pageSize =>
                this.props.updateState({ pageSize, page: 1 })
              }
              onPageChange={page => this.props.updateState({ page })}
            />
          )}
        </section>
      </div>
    );
  }
}

function mapStateToProps({ coins, prices, favorites }) {
  return {
    coins: coins.result
      .filter(id => favorites.data.includes(id))
      .map(id => coins.data[id]),
    prices: prices.data,
    favorites: favorites.data
  };
}

export default connect(mapStateToProps, {
  fetchCoins,
  fetchPrices,
  toggle,
  fsCustomEvent
})(CoinWrapper(Home));
