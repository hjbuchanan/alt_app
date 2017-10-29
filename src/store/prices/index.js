import CONST from './constants';

const initialState = {
  data: {},
  result: [],
};

export default (state = initialState, { type, payload, error, meta }) => {
  switch (type) {
    case CONST.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...payload.reduce((locations, location) => {
            locations[location.id] = { ...location, count: 0 };
            return locations;
          }, {}),
        },
        result: [
          ...new Set([
            payload.find(location => location.name === 'Pear').id,
            ...payload.map(l => l.id),
          ]),
        ],
      };
    case 'UPDATE_POSITION':
      return {
        ...state,
        data: {
          ...state.data,
          ...payload.locations.reduce((locations, id) => {
            locations[id] = { ...state.data[id], count: state.data[id].count + 1 };
            return locations;
          }, {}),
        },
      };
    case CONST.UPDATE_LOCATION_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};
