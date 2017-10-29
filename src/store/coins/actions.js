import { createAction } from 'redux-actions';
import axios from 'axios';
import * as CONST from './constants';

const FETCH_COINS_SUCCESS = createAction(CONST.FETCH_COINS_SUCCESS);

export fetchCoins = () =>