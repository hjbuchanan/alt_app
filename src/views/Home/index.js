import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchCoins } from 'store/coins/actions';
import { SearchIcon, FilterIcon, SortIcon } from 'shared/icons';
import { Select, Button, CoinBlock } from 'shared/components';

class Home extends Component {
  state = {
    filter: '',
    sort: '',
  };

  async componentWillMount() {
    await this.props.fetchCoins();
  }

  onSelectChange(key) {
    return ({ value }) => {
      this.setState({ [key]: value });
    };
  }

  filter(coin) {
    const { filter } = this.state;
    if (filter === 'sponsored') {
      return coin.Sponsored;
    } else {
      return true;
    }
  }

  sort(coinA, coinB) {
    const { sort } = this.state;
    if (sort === 'alphabetical') {
      return coinA.CoinName < coinB.CoinName ? 1 : -1;
    } else if (sort === 'supply') {
      return coinA.TotalCoinSupply < coinB.TotalCoinSupply ? 1 : -1;
    }
  }

  get coins() {
    return this.props.coin.filter(this.filter.bind(this)).sort(this.sort.bind(this));
  }

  render() {
    const { sort, filter } = this.state;
    const { coins } = this.props;

    return (
      <div className="View">
        <section className="View-heading">
          <h1 className="View-title">Coins</h1>
          <div className="View-select-search-wrapper">
            <SearchIcon className="View-select-search" />
            <Select
              isIcon
              autosize={false}
              clearable={false}
              searchable={true}
              options={[{ label: 'Show All', value: 'all' }, { label: 'Name', value: 'name' }]}
              onChange={change => this.onSelectChange('customer')(change)}
              placeholder="Search by Customer or User"
              value={this.state.customer || ''}
            />
          </div>
          {this.state.customer && (
            <Button
              className="Button--select"
              onClick={() => this.setState({ customer: null })}
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
                options={[
                  { label: 'Show All', value: 'all' },
                  { label: 'Sponsored', value: 'sponsored' },
                ]}
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
                      'View-icon--active': sort !== 'updated',
                      'View-icon--flip': !this.state.isDescending,
                    })}
                  />
                }
                text="Sort By"
                onClick={this.onToggleSort}
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
                  { label: 'Notes Due', value: 'due' },
                ]}
                onChange={change => this.onSelectChange('sort')(change)}
                placeholder="Search by Customer or User"
                value={this.state.sort}
              />
            </div>
          </div>
          <div className="View-content">
            {coins.map(coin => <CoinBlock key={coin.Id} {...coin} />)}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ coins, prices }) {
  return {
    coins: coins.result.map(id => coins.data[id]),
    prices,
  };
}

export default connect(mapStateToProps, { fetchCoins })(Home);
