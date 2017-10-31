import CONST from './constants';

const initialState = {
  data: {},
  result: [],
  byCoin: {},
};

export default (state = initialState, { type, payload, error, meta }) => {
  switch (type) {
    case CONST.FETCH_PRICES_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...Object.keys(payload.prices).reduce((prices, symbol) => {
            prices[symbol] = {
              [payload.exchange]: payload.prices[symbol],
              ...(state.data[symbol] || {}),
            };
            return prices;
          }, {}),
        },
      };
    case CONST.FETCH_COIN_PRICE_SUCCESS:
      return {
        ...state,
        byCoin: {
          ...state.byCoin,
          [payload.symbol]: {
            ...state.byCoin[payload.symbol],
            [payload.exchange]: (payload.data.Data || []).reverse(),
          },
        },
      };
    default:
      return state;
  }
};
