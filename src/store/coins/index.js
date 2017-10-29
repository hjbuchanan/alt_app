import CONST from './constants';

const initialState = {
  data: {},
  result: [],
};

export default (state = initialState, { type, payload, error, meta }) => {
  switch (type) {
    case CONST.FETCH_COINS_SUCCESS:
      return {
        ...state,
        data: payload.Data,
        result: Object.keys(payload.Data),
      };
    default:
      return state;
  }
};
