import {combineReducers, Reducer} from 'redux';

export default (): Reducer =>
  combineReducers({
    state: (_) => null,
  });
