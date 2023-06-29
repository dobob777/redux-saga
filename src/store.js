// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers/index';
import TodoSaga from './saga/todoSaga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(TodoSaga);
export default store;