/* eslint-disable no-unused-vars */
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk as thunkMiddleware, ThunkAction, ThunkDispatch } from 'redux-thunk';
import { reducer, RootState } from './reducers';

/***
 * Thunk dispatch type alias for convenience in tests and components.
 */

// store for tests
export const store = createStore(reducer);

const makeStore: MakeStore<RootState> = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const wrapper = createWrapper<RootState>(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
