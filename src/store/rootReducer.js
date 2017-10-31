import { combineReducers } from 'redux';

import coins from './coins';
import flash from './flash';
import favorites from './favorites';
import prices from './prices';

const rootReducer = combineReducers({
  coins,
  favorites,
  flash,
  prices,
});

export default rootReducer;
