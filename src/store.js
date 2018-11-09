import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import DevTools from './DevTools';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// State
const INITIAL_STATE = {
  loading: false,
  activeShip: {},
  ships: [],
};

// Reducer
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, activeUser: action.payload };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_STARSHIPS':
      return { ...state, ships: action.payload };
    case 'SET_ACTIVE_SHIP':
      return { ...state, activeShip: action.payload };
    default:
      return state;
  }
};

// Store
function configureStore(initialState = INITIAL_STATE) {
  const middlewares = [logger, sagaMiddleware];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument(),
  );
  return createStore(appReducer, initialState, enhancer);
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;
