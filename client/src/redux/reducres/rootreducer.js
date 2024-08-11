import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer'; // Adjust the path to your reducer

const rootReducer = combineReducers({
  tasks: tasksReducer,
  // other reducers
});

export default rootReducer;
