// reducer 根文件
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import header from './modules/header'
import bloglist from './modules/bloglist'

const middlewares = [
    thunk,
    createLogger
];

const reducer = combineReducers({
    header: header,
    bloglist: bloglist
});

export default createStore(reducer, applyMiddleware(...middlewares));





