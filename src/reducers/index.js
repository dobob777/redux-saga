// root reducer
import toDoReducer from './todoList';
// import toDoReducer from './todoList';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toDoReducer
});

export default rootReducer;