import { createAction } from 'redux-actions';
import axios from 'axios';

import { gracefullyHandleError } from 'utils';
import CONST from './constants';

const fetchCoinsSuccess = createAction(CONST.FETCH_COINS_SUCCESS);

export const fetchCoins = () => {
  return dispatch => {
    const data = window.localStorage.getItem('COIN_DATA');
    if (data) return dispatch(fetchCoinsSuccess(JSON.parse(data)));

    return axios
      .get('/data/all/coinlist')
      .then(res => {
        window.localStorage.setItem('COIN_DATA', JSON.stringify(res.data));
        dispatch(fetchCoinsSuccess(res.data));
      })
      .catch(gracefullyHandleError);
  };
};
