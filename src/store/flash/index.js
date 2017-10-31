import CONST from 'store/flash/constants';

const INITIAL_STATE = {
  message: '',
  type: '',
};

export default (state = INITIAL_STATE, { payload, type, meta = null }) => {
  switch (type) {
    case CONST.ADD_FLASH:
      return {
        ...state,
        ...payload,
        visible: payload.message.length > 0 && payload.type.length > 0,
      };
    case CONST.REMOVE_FLASH:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
