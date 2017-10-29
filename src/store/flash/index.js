import { ADD_FLASH, REMOVE_FLASH } from 'store/flash/types';

const INITIAL_STATE = {
  message: '',
  type: '',
};

export default (state = INITIAL_STATE, { payload, type, meta = null }) => {
  switch (type) {
    case ADD_FLASH:
      return {
        ...state,
        ...payload,
        visible: payload.message.length > 0 && payload.type.length > 0,
      };
    case REMOVE_FLASH:
      return { type: '', message: '', visible: false };
    default:
      return state;
  }
};
