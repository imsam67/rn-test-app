import { combineReducers } from 'redux';
import app from './app-reducer';

import * as types from '../actions/action-types';

const appReducer = combineReducers({
   app
});

const rootReducer = (state, action) => {

   // When a sign off action is dispatched we will reset redux state
   if (action.type === types.SIGN_OFF)
      state = undefined;

   return appReducer(state, action);
};

export default rootReducer;