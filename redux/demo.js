import { createStore } from './createStore';
import { applyMiddleware } from './applyMiddleware';


const reducer = () => {}
const initState = 0
const middleware = (api) => (next) => (action) => {
    // todo
    next(action)
}
const middlewares = [middleware, middleware] 
const store = createStore(reducer, initState, applyMiddleware(middlewares))