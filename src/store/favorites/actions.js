import { createActions } from 'redux-actions';
import CONST from './constants';

export const { toggleFavorite } = createActions(CONST.TOGGLE_FAVORITE);

export const toggle = sym => {
  return (dispatch, getState) => {
    let { data } = getState().favorites;
    data = data.includes(sym) ? data.filter(s => s !== sym) : [...data, sym];
    window.localStorage.setItem('ALT_FAVORITES', JSON.stringify(data));
    dispatch(toggleFavorite(data));
  };
};
