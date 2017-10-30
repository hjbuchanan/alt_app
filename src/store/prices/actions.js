import { createAction } from 'redux-actions';
import axios from 'axios';

import { gracefullyHandleError } from 'utils';
import CONST from './constants';

const fetchPricesSuccess = createAction(CONST.FETCH_PRICES_SUCCESS);
const clearPrices = createAction(CONST.CLEAR_PRICES);

export const fetchPrices = () => {
  return async (dispatch, getState) => {
    const { coins } = getState();
    const { page, pageSize, result } = coins;
    const total = Math.max(result.length / 50);

    dispatch(clearPrices());

    await Promise.all([
      Array.from({ length: total }).map((_, index) => {
        return fetchBlock(dispatch, result.slice(index * 50, (index + 1) * 50).join(','), 'CCCAGG');
      }),
    ]);
    fetchBlock(dispatch, 'ETH,LTC,DASH', 'Kraken');
    fetchBlock(dispatch, 'ETH,LTC,DASH', 'Bittrex');
  };
};

const fetchBlock = (dispatch, fsyms, exchange) => {
  axios
    .get('/data/pricemulti', {
      params: {
        fsyms,
        tsyms: 'BTC',
        e: exchange,
      },
    })
    .then(res => dispatch(fetchPricesSuccess({ prices: res.data, exchange })))
    .catch(gracefullyHandleError);
};
