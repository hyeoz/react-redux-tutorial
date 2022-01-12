import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// createStore 사용할 때 리듀서 한 개만 사용할 수 있으므로 한 개로 합쳐주어야 함
// 파일명이 index.js 이면 modules 까지만 써도 사용할 수 있음
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
