import React, { Component } from 'react';

function CoinWrapper(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        page: 1,
        pageSize: 100,
        coin: null,
        filter: 'all',
        sort: 'alphabetical',
        isDescending: true
      };

      this.onSelectChange = this.onSelectChange.bind(this);
      this.filterByCoin = this.filterByCoin.bind(this);
      this.filterByMain = this.filterByMain.bind(this);
      this.sort = this.sort.bind(this);
    }

    async componentWillMount() {
      this.setState({ loading: true });

      await this.props.fetchCoins();
      await this.props.fetchPrices();

      this.setState({ loading: false });

      this.initPolling();
    }

    componentDidMount() {
      if (this.props.coins.length) {
        this.setState({
          options: [
            ...this.props.coins.map(coin => ({
              label: coin.Symbol,
              value: coin.Symbol
            }))
          ]
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.coins.length !== nextProps.coins.length) {
        this.setState({
          options: [
            ...nextProps.coins.map(coin => ({
              label: coin.Symbol,
              value: coin.Symbol
            }))
          ]
        });
      }
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    initPolling() {
      this.timeout = setTimeout(() => {
        this.props.fetchPrices();
        this.initPolling();
      }, 3000 * 1000);
    }

    onSelectChange(key) {
      return ({ value }) => {
        this.setState({ [key]: value, page: 1 });
      };
    }

    filterByCoin(coin) {
      return this.state.coin ? this.state.coin === coin.Symbol : true;
    }

    filterByMain(coin) {
      const { filter } = this.state;
      return filter === 'main'
        ? ['LTC', 'DASH', 'ETH'].includes(coin.Symbol)
        : true;
    }

    sort(coinA, coinB) {
      const { sort } = this.state;
      const { prices } = this.props;
      if (sort === 'alphabetical') {
        return (
          (coinA.CoinName.trim() < coinB.CoinName.trim() ? 1 : -1) *
          this.isDescending
        );
      } else if (sort === 'supply') {
        return (
          (coinA.TotalCoinSupply < coinB.TotalCoinSupply ? 1 : -1) *
          this.isDescending
        );
      } else if (sort === 'price') {
        const priceA = prices[coinA.Symbol]
          ? prices[coinA.Symbol].CCCAGG.BTC
          : 0;
        const priceB = prices[coinB.Symbol]
          ? prices[coinB.Symbol].CCCAGG.BTC
          : 0;

        return (priceA < priceB ? 1 : -1) * this.isDescending;
      } else {
        return 1;
      }
    }

    get isDescending() {
      return this.state.isDescending ? -1 : 1;
    }

    render() {
      return (
        <WrappedComponent
          isDescending={this.state.isDescending}
          page={this.state.page}
          pageSize={this.state.pageSize}
          updateState={payload => this.setState(payload)}
          coin={this.state.coin}
          filter={this.state.filter}
          sortValue={this.state.sort}
          options={this.state.options}
          loading={this.state.loading}
          onSelectChange={this.onSelectChange}
          filterByCoin={this.filterByCoin}
          filterByMain={this.filterByMain}
          sort={this.sort}
          {...this.props}
        />
      );
    }
  };
}

export default CoinWrapper;
