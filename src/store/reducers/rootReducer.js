import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
