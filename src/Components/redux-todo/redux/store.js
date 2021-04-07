import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from "./reducers";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware', store.getState())
    return result
}

export default createStore(rootReducer, composeEnhancers(applyMiddleware(
    loggerMiddleware, //работа для сонсоли
    reduxThunk
)))