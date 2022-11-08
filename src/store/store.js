import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancer);
