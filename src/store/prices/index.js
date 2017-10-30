import CONST from './constants';

const initialState = {
  data: {},
  result: [],
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
    case CONST.CLEAR_PRICES:
      return { ...initialState };
    default:
      return state;
  }
};
