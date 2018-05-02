// Component Imports
import actions from './actions';
import actionTypes from './actionTypes';
// import IrcService from 'Classes/IrcService';
import initialState from './initialState';
import { AppStateProvider, AppStateConsumer } from './StoreContext';



export {
  actions,
  actionTypes,
  AppStateProvider as Provider,
  AppStateConsumer as connect,
  initialState,
};
