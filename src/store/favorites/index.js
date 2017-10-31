import CONST from './constants';

const isEmpty = window.localStorage.getItem('ALT_FAVORITES') === null;
const initialState = {
  data: isEmpty ? ['DASH', 'ETH', 'LTC'] : JSON.parse(window.localStorage.getItem('ALT_FAVORITES')),
};

export default (state = initialState, { type, payload, error, meta }) => {
  switch (type) {
    case CONST.TOGGLE_FAVORITE:
      return {
        data: payload,
      };
    default:
      return state;
  }
};
