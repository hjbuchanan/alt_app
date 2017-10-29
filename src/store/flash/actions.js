import { createActions } from 'redux-actions';
import CONST from 'store/flash/constants';

export const { addFlash, removeFlash } = createActions(CONST.ADD_FLASH, CONST.REMOVE_FLASH);

export function flash(payload) {
  return dispatch => {
    dispatch(addFlash(payload));
    if (payload.timeout)
      setTimeout(() => {
        dispatch(removeFlash());
      }, payload.timeout);
  };
}


