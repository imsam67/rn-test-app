import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root reducer
import rootReducer from '../reducers/root-reducer';

export default function configureStore(initialState) {

   const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
   );

   return store
}