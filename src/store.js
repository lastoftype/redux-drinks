import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import DevTools from './DevTools';

// State
const INITIAL_STATE = {
  loading: false,
  activeUser: {},
};

// Reducer
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, activeUser: action.payload };
    default:
      return state;
  }
};

// Actions
export const setUser = ({ name, id, email }) => ({
  type: 'SET_USER',
  payload: {
    name,
    id,
    email,
  },
});

// Store
function configureStore(initialState = INITIAL_STATE) {
  const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument(),
  );
  return createStore(appReducer, initialState, enhancer);
}

const store = configureStore();

export default store;
