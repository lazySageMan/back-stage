// reducer 根文件
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import header from './modules/header'

const middlewares = [
    thunk,
    createLogger
];

const reducer = combineReducers({
    header: header
});

export default createStore(reducer, applyMiddleware(...middlewares));





