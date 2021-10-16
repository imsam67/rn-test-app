import * as types from '../actions/action-types';

const initialState = {
   isAuthenticated: false
};

export default (state = initialState, action) => {
   switch (action.type) {

      case types.SET_IS_AUTHENTICATED:
         return Object.assign({}, state, {
            isAuthenticated: action.value,
         })

      default: return state
   }
}