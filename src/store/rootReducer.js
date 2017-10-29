import { combineReducers } from 'redux';

import coins from './coins';
import prices from './prices';

const rootReducer = combineReducers({
  coins,
  prices,
});

export default rootReducer;
