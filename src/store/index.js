import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export default compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
